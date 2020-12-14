import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledChipInfo = styled.div`
    ${setBoxSizing()}
    display: flex;
    align-items: center;
`;

StyledChipInfo.defaultProps = {
    theme: themeBasic,
};

export const StyledIcon = styled.div`
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
    border-radius: 50%;
    background-color: ${({ theme }): string => theme.shades.six};
    width: 20px;
    height: 20px;
`;

export const StyledText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 0, 0.5)};
    color: ${({ theme }): string => theme.shades.three};
`;
