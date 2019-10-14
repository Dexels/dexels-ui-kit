import PropTypes from 'prop-types';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const ThemeToggleContext = React.createContext();

export const useTheme = () => React.useContext(ThemeToggleContext);

export const MyThemeProvider = ({ children }) => {
    const [themeLayout, setThemeLayout] = React.useState({
        layout: 'basic',
    });

    const [themeMode, setThemeMode] = React.useState({
        mode: 'basic',
    });

    const setLayout = (layout) => {
        setThemeLayout({ layout });
    };

    const setMode = (mode) => {
        setThemeMode({ mode });
    };

    return (
        <ThemeToggleContext.Provider value={{
            setLayout,
            setMode,
        }}
        >
            <ThemeProvider
                theme={{
                    layout: themeLayout.layout,
                    mode: themeMode.mode,
                }}
            >
                {children}
            </ThemeProvider>
        </ThemeToggleContext.Provider>
    );
};

MyThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
