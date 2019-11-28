import styled, { css } from 'styled-components';
import { FORM_ELEMENT_LABEL_VARIANTS } from './FormElementLabel.consts';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

// @TODO: refactor transitionEffect function to accept multiple properties
export const StyledFormElementLabel = styled.div`
    position: absolute;
    transition: top 300ms ease, left 300ms ease;
    z-index: 1;
    max-width: 70%;
    text-align: left;
    pointer-events: none;

    ${({ isActive, variant }) => variant === FORM_ELEMENT_LABEL_VARIANTS.COMPACT && css`
        top: ${isActive ? '-16px' : 0};
        left: 0;
    `}

    ${({
        backgroundColor,
        isActive,
        theme,
        variant,
    }) => variant === FORM_ELEMENT_LABEL_VARIANTS.OUTLINE && css`
        top: ${isActive ? '-8px' : '50%'};
        left: ${theme.spacing(isActive ? 2.5 : 1.5)};
        transform: ${isActive ? 'none' : 'translate3d(0, -50%, 0)'};

        ${isActive && css`
            padding: ${theme.spacing(0, 0.5)};

            &::after {
                display: block;
                position: absolute;
                top: 8px;
                left: 0;
                z-index: -1;
                background-color: ${backgroundColor || theme.shades.nine};
                width: 100%;
                height: 1px;
                content: '';
            }
        `}
    `}
`;

StyledFormElementLabel.propTypes = {
    backgroundColor: PropTypes.string,
    isActive: PropTypes.bool.isRequired,
    theme: themePropTypes,
    variant: PropTypes.oneOf(Object.values(FORM_ELEMENT_LABEL_VARIANTS)).isRequired,
};

StyledFormElementLabel.defaultProps = {
    backgroundColor: '',
    theme: themeBasic,
};

export default StyledFormElementLabel;
