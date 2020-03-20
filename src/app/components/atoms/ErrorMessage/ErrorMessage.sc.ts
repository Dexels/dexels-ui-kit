import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledErrorMessage = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    color: ${({ theme }): string => theme.colorInvalid};
`;

StyledErrorMessage.defaultProps = {
    theme: themeBasic,
};

export default StyledErrorMessage;
