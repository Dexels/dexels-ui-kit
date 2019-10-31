import styled, { css } from 'styled-components';
import { INPUT_VARIANTS } from '../Input/Input.consts';
import PropTypes from 'prop-types';

export const StyledInputLabel = styled.div`
    position: absolute;
    z-index: 1;
    pointer-events: none;

    ${({ isActive, theme, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: 0;
        left: 0;

        ${isActive && css`
            top: -${theme.spacing(2)};
            left: 0;
            padding: 0;
        `};
    `};

    ${({ isActive, theme, variant }) => variant === INPUT_VARIANTS.OUTLINE && css`
        top: ${theme.spacing(1.5)};
        left: ${theme.spacing(1.5)};

        ${isActive && css`
            top: -${theme.spacing(1)};
            left: ${theme.spacing(2.5)};
            padding: ${theme.spacing(0, 0.5)};

            &::after {
                display: block;
                position: absolute;
                top: ${theme.spacing(1)};
                left: 0;
                z-index: -1;
                background-color: ${theme.shades.nine};
                width: 100%;
                height: 1px;
                content: '';
            }
        `};
    `};
`;

StyledInputLabel.propTypes = {
    isActive: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export default StyledInputLabel;
