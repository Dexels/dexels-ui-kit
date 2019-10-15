import GenericDropdown from '../../molecules/GenericDropdown/GenericDropdown';
import { getAvailableThemes } from '../../../styles/theme/theme';
import React from 'react';
import { StyledThemeSwitcher } from './ThemeSwitcher.sc';
import { useTheme } from '../../../styles/theme/ThemeContext';

const ThemeSwitcher = () => {
    const theme = useTheme();

    const setThemeProps = (layout = 'basic', mode = 'basic') => {
        theme.setLayout(layout);
        theme.setMode(mode);
    };

    return (
        <StyledThemeSwitcher>
            <GenericDropdown
                defaultValue={theme.mode}
                items={getAvailableThemes()}
                onChange={(selectedValue) => setThemeProps(theme.layout, selectedValue)}
            />
        </StyledThemeSwitcher>
    );
};

export default ThemeSwitcher;
