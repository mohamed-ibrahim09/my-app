'use client';

import React, { useLayoutEffect, useState } from 'react';

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useLayoutEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggle = () => {
    const next = !document.documentElement.classList.contains('dark');
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
    setIsDark(next);
  };

  return (
    <button
      type="button"
      onClick={toggle}
      className="rounded-md p-2 text-[color:var(--body)] transition-colors duration-300 hover:bg-[rgba(124,58,237,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] dark:hover:bg-[rgba(124,58,237,0.2)]"
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <span className="text-lg leading-none" aria-hidden>
        {isDark ? '☀️' : '🌙'}
      </span>
    </button>
  );
}
