import { getAvailableThemes, getSessionTheme, setSessionTheme } from '../../../styles/theme/themeFunctions';
import GenericDropdown from '../../molecules/GenericDropdown/GenericDropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledThemeSwitcher } from './ThemeSwitcher.sc';
import { useTheme } from '../../../styles/theme/ThemeContext';

export const ThemeSwitcher = ({ theme }) => {
    const themeSwitcher = useTheme();

    const setThemeProps = (layout = 'basic', mode = 'basic') => {
        themeSwitcher.setLayout(layout);
        themeSwitcher.setMode(mode);

        setSessionTheme(
            {
                layout,
                mode,
            },
        );

        // location.reload();
    };

    return (
        <StyledThemeSwitcher>
            <GenericDropdown
                defaultValue={getSessionTheme().mode}
                items={getAvailableThemes()}
                onChange={(selectedValue) => setThemeProps(theme.layout, selectedValue)}
            />
        </StyledThemeSwitcher>
    );
};

ThemeSwitcher.propTypes = {
    theme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default ThemeSwitcher;
