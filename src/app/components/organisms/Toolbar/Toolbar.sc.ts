import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: ${({ theme }): string => theme.spacing(0, 0, 0, 2)};
`;

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
