import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GithubContributions = ({ username }) => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log('Token:', process.env.REACT_APP_GITHUB_TOKEN);

    const fetchContributions = async () => {
      try {
        const token = process.env.REACT_APP_GITHUB_TOKEN;
        const response = await axios.post(
          'https://api.github.com/graphql',
          {
            query: `
              query {
                user(login: "${username}") {
                  contributionsCollection {
                    contributionCalendar {
                      weeks {
                        contributionDays {
                          date
                          contributionCount
                        }
                      }
                    }
                  }
                }
              }
            `,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data.errors) {
          throw new Error(response.data.errors[0].message);
        }

        const data = response.data.data.user.contributionsCollection.contributionCalendar.weeks;
        setContributions(data);
      } catch (error) {
        console.error('Error fetching GitHub contributions:', error);
        setError(`Gagal mengambil data kontribusi: ${error.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username]);

  const getColor = (count) => {
    if (count === 0) return '#161B22';
    if (count < 3) return '#0E4429';
    if (count < 5) return '#006D32';
    if (count < 7) return '#26A641';
    return '#39D353';
  };

  if (loading) {
    return <div>Memuat data kontribusi...</div>;
  }

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2px' }}>
        {contributions.map((week, weekIndex) => (
          <div key={weekIndex} style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {week.contributionDays.map((day, dayIndex) => (
              <div
                key={dayIndex}
                style={{
                  width: '10px',
                  height: '10px',
                  backgroundColor: getColor(day.contributionCount),
                }}
                title={`${day.date}: ${day.contributionCount} contributions`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GithubContributions;
