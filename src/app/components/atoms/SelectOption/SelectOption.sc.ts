import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledSelectOption = styled.option`
    background-color: ${({ theme }): string => theme.background.primary};
    color: ${({ theme }): string => theme.colorTextBody.primary};
`;

StyledSelectOption.defaultProps = {
    theme: themeBasic,
};
