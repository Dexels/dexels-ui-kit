import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const Message = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    align-items: center;
    width: 100%;
    height: ${({ theme }): string => theme.spacing(4)};
`;

Message.defaultProps = {
    theme: themeBasic,
};

export const MessageWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${({ theme }): string => theme.spacing(0.5, 0, 0)};
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 2)};
`;

MessageWrapper.defaultProps = {
    theme: themeBasic,
};
