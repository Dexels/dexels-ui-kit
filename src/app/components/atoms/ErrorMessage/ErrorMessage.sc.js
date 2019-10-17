import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { colorSignalError } from '../../../styles/theme/theme';
import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${textStyling(availableTextStyles().caption)};
    color: ${colorSignalError};
`;

export default StyledErrorMessage;
