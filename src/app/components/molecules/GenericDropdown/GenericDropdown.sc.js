import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import { getThemeComponent } from '../../../styles/theme/themeFunctions';
import PropTypes from 'prop-types';

const theme = getThemeComponent('button');

export const DisplayListButton = styled.div`
    position: absolute;
    float: right;
    color: ${theme.colorDividerColor};

    ${({ isListCollapsed }) => isListCollapsed && css`
        color: ${theme.colorActiveInput};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `};
`;

DisplayListButton.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
};

DisplayListButton.defaultProps = {
    isDisabled: false,
};

export const Option = styled.option`
    ${textStyling(availableTextStyles().body1)};
`;

export const Select = styled.select`
    ${textStyling(availableTextStyles().body1)};
    appearance: none;
    position: relative;
    outline: none;
    border: unset;
    background: ${theme.backgroundColor};
    width: 100%;

    ${({ isDisabled }) => isDisabled && css`
        color: ${theme.colorDisabled};
    `};
`;

Select.propTypes = {
    isDisabled: PropTypes.bool,
};

Select.defaultProps = {
    isDisabled: false,
};

export const StyledGenericDropdown = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-direction: row-reverse;
    border-bottom: 2px solid ${theme.colorDivider};

    ${({ isListCollapsed }) => isListCollapsed && css`
        border-bottom: 2px solid ${theme.colorActiveInput};
    `};

    ${({ isDisabled }) => isDisabled && css`
        color: ${theme.colorDisabled};
        border-bottom: 2px solid ${theme.colorDisabled};
        pointer-events: none;
    `};
`;

StyledGenericDropdown.propTypes = {
    isDisabled: PropTypes.bool,
    isListCollapsed: PropTypes.bool.isRequired,
};

StyledGenericDropdown.defaultProps = {
    isDisabled: false,
};
