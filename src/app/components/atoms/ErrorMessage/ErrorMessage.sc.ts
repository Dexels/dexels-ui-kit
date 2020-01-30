import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledErrorMessage = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)}
    color: ${({ theme }) => theme.colorInvalid};
`;

StyledErrorMessage.defaultProps = {
    theme: themeBasic,
};

export default StyledErrorMessage;
