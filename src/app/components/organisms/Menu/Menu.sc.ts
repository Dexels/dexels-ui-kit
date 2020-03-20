import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';

export const StyledMenu = styled.div`
    border-bottom: 1px solid ${({ theme }): string => theme.shades.seven};
`;

StyledMenu.defaultProps = {
    theme: themeBasic,
};

export default StyledMenu;
