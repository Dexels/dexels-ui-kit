import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

const StyledItem = styled.div`
    display: flex;
    flex: 1 1 auto;
    justify-content: space-between;

    ${({ isParent, theme }) => css`
        padding: ${theme.spacing(1, 0, 1, isParent ? 1.5 : 4.2)};
    `}
`;

StyledItem.propTypes = {
    isParent: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledItem.defaultProps = {
    theme: themeBasic,
};

export default StyledItem;
