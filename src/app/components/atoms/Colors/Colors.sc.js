import { invertColor } from '../../../utils/invertColor';
import styled from 'styled-components';

export const StyledColorWrapper = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    background-color: transparent;
`;

export const StyledColorText = styled.span`
    text-align: center;
    color: ${({ color }) => invertColor(color, true)};
`;

export const StyledColor = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    margin: 8px;
    border: 1px solid black;
    border-radius: 50px;
    background-color: ${({ color }) => color};
    width: 100px;
    height: 100px;
`;
