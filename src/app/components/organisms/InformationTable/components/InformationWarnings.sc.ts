import { Message, MessageWrapper } from './Information.sc';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const WarningMessage = styled(Message)`
    color: ${({ theme }): string => theme.colorSecondary};
`;

WarningMessage.defaultProps = {
    theme: themeBasic,
};

export const WarningMessageWrapper = styled(MessageWrapper)`
    border-left: ${({ theme }): string => `8px solid ${theme.colorSecondary}`};
`;

WarningMessageWrapper.defaultProps = {
    theme: themeBasic,
};
