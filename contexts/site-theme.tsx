"use client";

import React from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
    theme: Theme;
    toggleTheme(): void;
};
export const ThemeContext = React.createContext<ThemeContextType | null>(null);
export default function ThemeProvider({ children }: { children: React.ReactNode }) {
    const [theme, setTheme] = React.useState<Theme>("light");

    const toggleTheme = () => {
        if (theme === "light") {
            setTheme("dark");
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        }
        if (theme === "dark") {
            setTheme("light");
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    

    React.useEffect(() => {
        const localTheme: string | null = window?.localStorage.getItem("theme") || null;
        if (localTheme) {
            if (localTheme === "dark") {
                setTheme(localTheme);
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setTheme("dark");
            document.documentElement.classList.add("dark");
        }
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export const useTheme = () => {
    const context = React.useContext(ThemeContext);
    if (!context) {
        throw new Error('theme context contains "null" value');
    }
    return context;
};
