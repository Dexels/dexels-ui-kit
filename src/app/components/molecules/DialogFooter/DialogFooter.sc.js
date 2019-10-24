import { availableTextStyles, textStyling } from '../../../styles/theming/textStyles';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${({ theme }) => theme.colorLight.dark};
    padding: ${({ theme }) => theme.spacing(2)};
`;

export const TextWrapper = styled.div`
    ${textStyling(availableTextStyles().body2)};
    flex: 1 1 auto;
    padding: ${({ theme }) => theme.spacing(0, 1, 0, 0)};
    word-break: break-all;
`;

export const ButtonBarWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: nowrap;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 2, 0, 0)};
`;
