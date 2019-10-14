import Button from '../../molecules/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledThemeSwitcher } from './ThemeSwitcher.sc';
import { useTheme } from '../../../styles/theme/ThemeContext';

export const ThemeSwitcher = ({ theme }) => {
    const themeSwitcher = useTheme();

    const setThemeProps = (layout = 'basic', mode = 'basic') => {
        themeSwitcher.setLayout(layout);
        themeSwitcher.setMode(mode);
    };

    return (
        <StyledThemeSwitcher>
            <Button onClick={() => setThemeProps(theme.layout, theme.mode === 'dark' ? 'light' : 'dark')}>
                {'Switch mode. Now selected = '}
                {theme.mode}
                {' Mode'}
            </Button>
            <Button onClick={() => setThemeProps(theme.layout, theme.mode === 'dark' ? 'light' : 'dark')} variant={'OUTLINE'}>
                {'Switch mode. Now selected = '}
                {theme.mode}
                {' Mode'}
            </Button>
            <Button onClick={() => setThemeProps(theme.layout, theme.mode === 'dark' ? 'light' : 'dark')} variant={'TEXT_ONLY'}>
                {'Switch mode. Now selected = '}
                {theme.mode}
                {' Mode'}
            </Button>
            <Button onClick={() => setThemeProps(theme.layout === 'basic' ? 'compact' : 'basic', theme.mode)}>
                {'Switch layout. Now selected =  '}
                {theme.layout}
                {' Layout'}
            </Button>
        </StyledThemeSwitcher>
    );
};

ThemeSwitcher.propTypes = {
    theme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default ThemeSwitcher;
