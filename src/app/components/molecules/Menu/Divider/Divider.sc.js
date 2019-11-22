import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.seven};
    height: 1px;
`;

Divider.propTypes = {
    theme: themePropTypes,
};

Divider.defaultProps = {
    theme: themeBasic,
};

export default Divider;
