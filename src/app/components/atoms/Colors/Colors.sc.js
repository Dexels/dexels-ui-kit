import styled from 'styled-components';

export const StyledColor = styled.div`
    border: 1px solid black;
    border-radius: 50px;
    background-color: ${({ color }) => color};
    width: 50px;
    height: 50px;
`;

export default StyledColor;
