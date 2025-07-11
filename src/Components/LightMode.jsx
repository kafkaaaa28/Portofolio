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
      className="inline-flex items-center h-8 p-2 mr-5 text-lg border-solid bg-white dark:text-white text-black dark:bg-gray-800 hover:text-white hover:bg-[#191C24] dark:hover:text-gray-800 rounded-lg dark:hover:bg-gray-100 hover:border-white focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-700"
      aria-label="Toggle dark mode"
    >
      {!darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
    </button>
  );
}

export default DarkModeToggle;
