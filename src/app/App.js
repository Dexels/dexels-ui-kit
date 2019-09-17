import { hot } from 'react-hot-loader/root';
import React from 'react';
import styled from 'styled-components';

const StyledApp = styled.div`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const App = () => (
  <StyledApp>
    {'Hello World!'}
  </StyledApp>
);

export default hot(App);
