import BaseStyles from './styles/base/base';
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
  <>
    <BaseStyles />
    <StyledApp>
      {'Hello World!'}
    </StyledApp>
  </>
);

export default hot(App);
