import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import {
    black,
    grey100,
    grey2,
    grey50,
    white,
} from '../../../styles/colors/colors';
import { getThemeValue, themeModes } from '../../../styles/theme/theme';
import { defaultIconSize } from '../../../styles/theme/layout';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import styledTheming from 'styled-theming';

const textIconBackgroundColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'textIconBackgroundColor', grey50),
    [themeModes.dark]: grey100,
    [themeModes.light]: grey2,
});

const textIconColor = styledTheming('mode', {
    [themeModes.basic]: ({ theme }) => getThemeValue(theme, 'textIconColor', white),
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
