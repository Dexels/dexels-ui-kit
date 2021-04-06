import { Message, MessageWrapper } from './Information.sc';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const ErrorMessage = styled(Message)`
    color: ${({ theme }): string => theme.colorInvalid};
`;

ErrorMessage.defaultProps = {
    theme: themeBasic,
};

export const ErrorMessageWrapper = styled(MessageWrapper)`
    border-left: ${({ theme }): string => `8px solid ${theme.colorInvalid}`};
`;

ErrorMessageWrapper.defaultProps = {
    theme: themeBasic,
};
