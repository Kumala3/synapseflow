import { useTheme } from "next-themes";
import { Switch } from "@nextui-org/react";
import { useEffect, useState } from "react";
import MoonIcon from "./Icons/MoonIcon";
import SunIcon from "./Icons/SunIcon";

export const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const [isDark, setIsDark] = useState(theme === "dark");

    // Update the local switch state when the theme changes
    useEffect(() => {
        setIsDark(theme === "dark");
    }, [theme]);

    const toggleTheme = () => {
        setTheme(isDark ? "light" : "dark");
    };

    return (
            <Switch
            size="lg"
            checked={isDark}
            color="primary"
            thumbIcon={isDark ? <MoonIcon /> : <SunIcon />}
            className="theme-transition"
            onChange={toggleTheme}
        />
    );
};
