import styled, { withTheme } from 'styled-components';
import BaseStyles from './styles/base';
import Button from './components/molecules/Button/Button';
import { getThemeComponent } from './styles/theme/themeFunctions';
import { hot } from 'react-hot-loader/root';
import PropTypes from 'prop-types';
import React from 'react';
import { ThemeSwitcher } from './components/organisms/ThemeSwitcher/ThemeSwitcher';

const activeTheme = getThemeComponent('root');

const StyledApp = styled.div`
    display: grid;
    margin: 0 0 20px;
    background-color: ${activeTheme.backgroundColor};
    padding: 20px;
    text-align: center;
    color: ${activeTheme.color};
`;

const App = ({ theme }) => (
    <>
        <BaseStyles />
        <StyledApp>
            {'Hello World!'}
            <ThemeSwitcher theme={theme} />
            <Button onClick={() => {}}>
                {'TESTBUTTON'}
            </Button>
            <Button onClick={() => {}} variant={'OUTLINE'}>
                {'TESTBUTTON'}
            </Button>
        </StyledApp>
        <span className="icon-Cards" />
    </>
);

App.propTypes = {
    theme: PropTypes.shape(PropTypes.object.isRequired).isRequired,
};

export default hot(withTheme(App));
