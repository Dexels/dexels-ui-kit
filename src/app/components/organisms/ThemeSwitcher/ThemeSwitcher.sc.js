import {
    buttonBackgroundColor,
    buttonColor,
    buttonFontSize,
    padding,
} from '../../../styles/theme/theme';
import styled from 'styled-components';

export const Button = styled.button`
    margin: 10px;
    background: ${buttonBackgroundColor};
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    color: ${buttonColor};
    cursor: pointer;
    font-size: ${buttonFontSize};
    padding: ${padding};
`;

export const StyledThemeSwitcher = styled.div`
    margin: 10px;
    border: none;
    border-radius: 0.3em;
    box-shadow: none;
    padding: ${padding};
`;
