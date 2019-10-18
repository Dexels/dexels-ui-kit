import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { colorError } from '../../../styles/theme/theme';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${textStyling(availableTextStyles().caption)};
    color: ${colorError};
`;

export default StyledErrorMessage;
