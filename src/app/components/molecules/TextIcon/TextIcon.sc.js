import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey2,
    grey50,
    white,
} from '../../../styles/colors/colors';
import { defaultIconSize } from '../../../styles/theme/layout';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import theme from 'styled-theming';
import { themeModes } from '../../../styles/theme/theme';

const textIconBackgroundColor = theme('mode', {
    [themeModes.basic]: grey50,
    [themeModes.dark]: grey100,
    [themeModes.light]: grey2,
});

const textIconColor = theme('mode', {
    [themeModes.basic]: white,
    [themeModes.dark]: white,
    [themeModes.light]: black,
});

export const StyledTextIcon = styled.div`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 100%;
    background-color: ${textIconBackgroundColor};
    padding: 8px;
    width: ${defaultIconSize};
    height: ${defaultIconSize};
    color: ${textIconColor};
`;

export default StyledTextIcon;
