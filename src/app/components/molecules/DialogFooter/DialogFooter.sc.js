import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    grey2,
    grey25,
    grey5,
} from '../../../styles/colors/colors';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';
import theme from 'styled-theming';
import { themeModes } from '../../../styles/theme/theme';

const dialogFooterBackgroundColor = theme('mode', {
    [themeModes.basic]: grey5,
    [themeModes.dark]: grey25,
    [themeModes.light]: grey2,
});

export const StyledDialogFooter = styled.footer`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom-left-radius: inherit;
    border-bottom-right-radius: inherit;
    background-color: ${dialogFooterBackgroundColor};
    padding: calc(${spacingUnit} * 2);
`;

export const TextWrapper = styled.div`
    ${textStyling(availableTextStyles().body2)};
    flex: 1 1 auto;
    padding: 0 8px 0 0;
    word-break: break-all;
`;

export const ButtonBarWrapper = styled.div`
    display: flex;
    flex: 0 1 auto;
    flex-wrap: nowrap;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: 0 16px 0 0;
`;
