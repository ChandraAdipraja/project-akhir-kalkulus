"use client";

import React, { useEffect, useState } from "react";
import { Switch } from "~/components/ui/Switch";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialDarkMode =
      localStorage.getItem("theme") === "dark" ||
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    setDarkMode(initialDarkMode);
    if (initialDarkMode) root.classList.add("dark");
  }, []);

  const toggleDarkMode = (checked: boolean) => {
    const root = window.document.documentElement;
    if (checked) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
    setDarkMode(checked);
  };

  return (
    <div>
      <label className="mr-2">Dark Mode</label>
      <Switch
        checked={darkMode}
        onCheckedChange={(checked) => toggleDarkMode(checked)}
      />
    </div>
  );
};

export default DarkModeToggle;
