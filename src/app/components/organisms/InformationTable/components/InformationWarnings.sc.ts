import { Message, MessageWrapper } from './Information.sc';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const WarningMessage = styled(Message)`
    color: ${({ theme }): string => theme.colorText.primary};
`;

WarningMessage.defaultProps = {
    theme: themeBasic,
};

export const WarningMessageWrapper = styled(MessageWrapper)`
    border-left: ${({ theme }): string => `8px solid ${theme.colorText.primary}`};
`;

WarningMessageWrapper.defaultProps = {
    theme: themeBasic,
};
