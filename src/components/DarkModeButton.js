import React from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import useStore from '../store/store';

export const DarkModeButton = () => {
    const toggleDarkMode = useStore((state) => state.toggleDarkMode);
    const dark = useStore((state) => state.dark);

    return (
        <button className="btn btn-primary" onClick={toggleDarkMode}>
            {dark ? (
                // Moon icon for dark mode
                <FaMoon className="h-6 w-6" />
            ) : (
                // Sun icon for light mode
                <FaSun className="h-6 w-6" />
            )}
        </button>
    )
}
