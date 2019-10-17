import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { colorBodyDark, colorDisabled, colorSecondary } from '../../../styles/theme/theme';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';

export const DisplayListButton = styled.div`
    position: absolute;
    float: right;
    color: ${colorBodyDark};

    ${({ iconSize }) => iconSize && css`
        font-size: ${iconSize};
    `};

    ${({ isListCollapsed }) => isListCollapsed && css`
        color: ${colorSecondary};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
    `};
`;

DisplayListButton.propTypes = {
    iconSize: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool.isRequired,
    isListCollapsed: PropTypes.bool.isRequired,
};

export const Option = styled.option`
    ${textStyling(availableTextStyles().body1)};
`;

export const Select = styled.select`
    ${textStyling(availableTextStyles().body1)};
    appearance: none;
    position: relative;
    outline: none;
    border: 0;
    background: 'transparent';
    width: 100%;

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
    `};
`;

Select.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
};

export const StyledGenericDropdown = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 2px solid ${colorBodyDark};

    ${({ isListCollapsed }) => isListCollapsed && css`
        border-bottom: 2px solid ${colorSecondary};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${colorDisabled};
        border-bottom: 2px solid ${colorDisabled};
        pointer-events: none;
    `};
`;

StyledGenericDropdown.propTypes = {
    isDisabled: PropTypes.bool.isRequired,
    isListCollapsed: PropTypes.bool.isRequired,
};
