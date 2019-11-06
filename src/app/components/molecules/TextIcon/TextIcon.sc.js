import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledTextIcon = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border: 0;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.shades.four};
    width: ${({ theme }) => theme.spacing(3)};
    height: ${({ theme }) => theme.spacing(3)};
    text-align: center;
    line-height: ${({ theme }) => theme.spacing(3)};
    color: ${({ theme }) => theme.colorContrastText.primary};
`;

StyledTextIcon.propTypes = {
    theme: themePropTypes,
};

StyledTextIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledTextIcon;
