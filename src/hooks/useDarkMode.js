import { useState } from "react";

export const useDarkMode = () => {
	const [theme, setTheme] = useState("dark");

	const toggleTheme = () => {
		return theme === "dark" ? setTheme("light") : setTheme("dark");
	};

	return [theme, toggleTheme];
};
