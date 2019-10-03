import BaseStyles from './styles/base';
import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
    margin: 0 0 20px;
    background-color: black;
    padding: 20px;
    text-align: center;
    color: white;
`;


const App = () => (
    <>
        <BaseStyles />
        <StyledApp>
            {'Hello World!'}
        </StyledApp>
        <span className="icon-Cards" />
    </>
);

export default hot(App);
