import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const StyledItem = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${({ hasChildren, isParent, theme }) => {
        if (hasChildren) {
            return css`
                padding: ${theme.spacing(0.5, 0, 0.5, 1.5)};
            `;
        }

        if (!isParent) {
            return css`
                padding: ${theme.spacing(1, 0, 1, 3)};
            `;
        }

        return css`
            padding: ${theme.spacing(1, 0, 1, 1.5)};
        `;
    }}
`;

StyledItem.propTypes = {
    hasChildren: PropTypes.bool.isRequired,
    isParent: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledItem.defaultProps = {
    theme: themeBasic,
};

export default StyledItem;
