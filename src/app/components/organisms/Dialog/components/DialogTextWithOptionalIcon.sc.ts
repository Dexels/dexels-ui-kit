import styled from 'styled-components';
import { TextWithOptionalIcon } from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

export const StyledTextWithOptionalIcon = styled(TextWithOptionalIcon)`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    justify-content: flex-start;
    margin: ${({ theme }): string => theme.spacing(1)} 0 ${({ theme }): string => theme.spacing(1.75)};
    color: ${({ theme }): string => theme.colorPrimary};
    font-weight: 600;
`;

export default StyledTextWithOptionalIcon;
