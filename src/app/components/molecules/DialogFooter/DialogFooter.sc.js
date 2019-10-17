import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { backgroundColorFooter } from '../../../styles/theme/theme';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${backgroundColorFooter};
    padding: calc(${spacingUnit} * 2);
`;

export const TextWrapper = styled.div`
    ${textStyling(availableTextStyles().body2)};
    flex: 1 1 auto;
    padding: 0 ${spacingUnit} 0 0;
    word-break: break-all;
`;

export const ButtonBarWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: nowrap;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: 0 calc(${spacingUnit} * 2) 0 0;
`;
