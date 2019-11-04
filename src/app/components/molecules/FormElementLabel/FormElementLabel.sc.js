import styled, { css } from 'styled-components';
import { INPUT_VARIANTS } from '../Input/Input.consts';
import PropTypes from 'prop-types';

export const StyledFormElementLabel = styled.div`
    position: absolute;
    z-index: 1;
    max-width: 70%;
    text-align: left;
    pointer-events: none;

    ${({ isActive, theme, variant }) => variant === INPUT_VARIANTS.COMPACT && css`
        top: ${isActive ? `-${theme.spacing(2)}` : 0};
        left: 0;
    `};

    ${({ isActive, theme, variant }) => variant === INPUT_VARIANTS.OUTLINE && css`
        top: ${isActive ? `-${theme.spacing(1)}` : theme.spacing(1.5)};
        left: ${theme.spacing(isActive ? 2.5 : 1.5)};

        ${isActive && css`
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

StyledFormElementLabel.propTypes = {
    isActive: PropTypes.bool.isRequired,
    variant: PropTypes.oneOf(Object.values(INPUT_VARIANTS)).isRequired,
};

export default StyledFormElementLabel;
