import styled from 'styled-components';
import { Text } from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon.sc';
import { TextWithOptionalIcon } from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

export const StyledTextWithOptionalIcon = styled(TextWithOptionalIcon)`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().buttonLarge)}
    justify-content: flex-start;
    margin: ${({ theme }): string => theme.spacing(1, 0, 2, 0)};
    color: ${({ theme }): string => theme.colorPrimary};

    ${Text} {
        margin: ${({ theme }): string => theme.spacing(0, 0, 0, 0.5)};
    }
`;

export default StyledTextWithOptionalIcon;
