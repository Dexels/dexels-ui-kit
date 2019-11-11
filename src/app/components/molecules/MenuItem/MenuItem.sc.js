import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

export const StyledMenuItem = styled.div`
    position: relative;

    ${({ isDisabled }) => isDisabled && css`
        * {
            pointer-events: none;
        }
    `}

    ${({ isParentElement }) => isParentElement === false && css`
        margin: 0 0 0 ${({ theme }) => theme.spacing(2.5)};
    `}
`;

StyledMenuItem.propTypes = {
    hasDivider: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isParentElement: PropTypes.bool.isRequired,
};

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: row;
`;

export const Divider = styled.div`
    background-color: ${({ theme }) => theme.shades.one};
    height: 1px;
`;
