import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';

function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      type="button"
      onClick={toggleDarkMode}
      className="inline-flex items-center h-8 p-2 mr-5 text-md dark:text-gray-800 text-white hover:text-black dark:hover:bg-[#191C24] dark:hover:text-white rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label="Toggle dark mode"
    >
      {!darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default DarkModeToggle;
