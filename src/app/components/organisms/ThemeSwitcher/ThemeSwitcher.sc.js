import {
    buttonBackgroundColor,
    buttonColor,
    buttonFontSize,
    padding,
} from '../../../styles/theme/theme';
import styled from 'styled-components';

export const Button = styled.button`
    margin: 10px;
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    background: ${buttonBackgroundColor};
    cursor: pointer;
    padding: ${padding};
    color: ${buttonColor};
    font-size: ${buttonFontSize};
`;

export const StyledThemeSwitcher = styled.div`
    margin: 10px;
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    padding: ${padding};
`;
