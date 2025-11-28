"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "dark",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "dark",
  storageKey = "vite-ui-theme",
  ...props
}) {
  // ✅ pick initial theme from localStorage if available (on client)
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") {
      return defaultTheme;
    }

    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme || defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  // ✅ apply theme class on <html> whenever theme changes
  useEffect(() => {
    if (typeof window === "undefined") return;

    const root = window.document.documentElement;
    root.classList.remove("light", "dark");

    let resolvedTheme = theme;

    if (theme === "system") {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      resolvedTheme = prefersDark ? "dark" : "light";
    }

    root.classList.add(resolvedTheme);
  }, [theme]);

  // ✅ setTheme also writes to localStorage
  const value = {
    theme,
    setTheme: (newTheme) => {
      setTheme(newTheme);

      if (typeof window === "undefined") return;

      try {
        window.localStorage.setItem(storageKey, newTheme);
      } catch (err) {
        console.error("Error saving theme to localStorage:", err);
      }
    },
  };

  return (
    <ThemeProviderContext.Provider value={value} {...props}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
