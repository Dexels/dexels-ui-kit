import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)}
    color: ${({ theme }) => theme.colorInvalid};
`;

StyledErrorMessage.propTypes = {
    theme: themePropTypes,
};

StyledErrorMessage.defaultProps = {
    theme: themeBasic,
};

export default StyledErrorMessage;
