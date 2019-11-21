import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/themePropTypes';

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
