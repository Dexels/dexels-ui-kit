import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface StyledWrapperProps {
    isDisabled: boolean;
}

export const StyledWrapper = styled.div<StyledWrapperProps>`
    ${setBoxSizing()}
    display: flex;
    background-color: ${({ theme }): string => theme.background.secondary};
    /* width: 100%;
    height: 100%; */
    /* overflow: auto; */
`;

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export const StyledPanelHeader = styled.div`
    flex: auto;
    padding: ${({ theme }): string => theme.spacing(0.5)};
    width: 50%;

    div > {
        width: 100%;
    }
`;

StyledPanelHeader.defaultProps = {
    theme: themeBasic,
};

export const ButtonWrapper = styled.div`
    button:nth-of-type(1) {
        margin: 0 8px 0 0;
    }
`;
