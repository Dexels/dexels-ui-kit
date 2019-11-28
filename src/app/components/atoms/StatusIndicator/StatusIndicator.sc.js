import {
    STATUS_INDICATOR_PLACEMENTS,
    STATUS_INDICATOR_SIZES,
    STATUS_INDICATOR_STATUSES,
} from './StatusIndicator.consts';
import styled, { css } from 'styled-components';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import PropTypes from 'prop-types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledStatusIndicator = styled.div`
    display: flex;
    align-items: center;
    border-radius: inherit;
    border-color: ${({ status, theme }) => getStatusColor(status, theme)};
    color: ${({ status, theme }) => getStatusColor(status, theme)};

    ${({ placement, size, theme }) => css`
        border-${placement}: ${theme.spacing(size === STATUS_INDICATOR_SIZES.LARGE ? 1 : 0.5)} solid;
    `}
`;

StyledStatusIndicator.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    size: PropTypes.oneOf(Object.values(STATUS_INDICATOR_SIZES)).isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_INDICATOR_STATUSES)).isRequired,
    theme: themePropTypes,
};

StyledStatusIndicator.defaultProps = {
    theme: themeBasic,
};

export const Text = styled.div`
    display: flex;
    align-items: center;

    ${({ placement, theme }) => placement === STATUS_INDICATOR_PLACEMENTS.LEFT && css`
        padding: ${theme.spacing(0, 0, 0, 1)};
    `}
`;

Text.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    theme: themePropTypes,
};

Text.defaultProps = {
    theme: themeBasic,
};

