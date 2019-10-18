import styled, { css } from 'styled-components';
import { ICON_COLORS } from './Icon.consts';
import PropTypes from 'prop-types';

export const StyledIcon = styled.span`
    ${({ size }) => css`
        font-size: ${size};
    `};

    ${({ color }) => css`
        color: ${color};
    `};
`;

StyledIcon.propTypes = {
    color: PropTypes.oneOf(Object.values(ICON_COLORS)),
    size: PropTypes.string.isRequired,
};

export default StyledIcon;
