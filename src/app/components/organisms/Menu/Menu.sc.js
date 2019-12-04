import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledMenu = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.shades.seven};
`;

StyledMenu.propTypes = {
    theme: themePropTypes,
};

StyledMenu.defaultProps = {
    theme: themeBasic,
};

export default StyledMenu;
