import BaseStyles from './styles/base';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    background-color: black;
    color: white;
    padding: 20px;
    text-align: center;
    margin: 0 0 20px;
`;

const App = () => (
    <>
        <BaseStyles />
        <StyledApp>
            {'Hello World!'}
        </StyledApp>
    </>
);

export default hot(App);
