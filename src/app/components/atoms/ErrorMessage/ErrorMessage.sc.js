import styled from 'styled-components';

export const StyledErrorMessage = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    color: ${({ theme }) => theme.colorError};
`;

export default StyledErrorMessage;
