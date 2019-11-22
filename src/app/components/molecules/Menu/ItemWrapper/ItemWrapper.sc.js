import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/themePropTypes';

const StyledItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${({ hasChildrenItems }) => hasChildrenItems && css`
        padding: ${({ theme }) => theme.spacing(0.5)} 0 ${({ theme }) => theme.spacing(0.5)} ${({ theme }) => theme.spacing(1)};
    `}

    ${({ hasChildrenItems }) => !hasChildrenItems && css`
        padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(1)};
    `}

    ${({ isParentItem }) => !isParentItem && css`
        padding: ${({ theme }) => theme.spacing(1)} 0 ${({ theme }) => theme.spacing(1)} ${({ theme }) => theme.spacing(2)};
    `}
`;

StyledItemWrapper.propTypes = {
    hasChildrenItems: PropTypes.bool.isRequired,
    isParentItem: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledItemWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledItemWrapper;
