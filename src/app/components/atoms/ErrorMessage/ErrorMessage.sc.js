import { availableTextStyles, textStyling } from '../../../styles/theming/textStyles';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${textStyling(availableTextStyles().caption)};
    color: ${({ theme }) => theme.colorError.main};
`;

export default StyledErrorMessage;
