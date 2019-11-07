import { STATUS_INDICATOR_PLACEMENTS, STATUS_INDICATOR_STATUSES } from './StatusIndicator.consts';
import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../styles/theming/themes/basic';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import PropTypes from 'prop-types';

export const StyledStatusIndicator = styled.div`
    display: flex;
    align-items: center;
    border-radius: inherit;
    border-color: ${({ status, theme }) => getStatusColor(status, theme)};
    color: ${({ status, theme }) => getStatusColor(status, theme)};

    ${({ placement }) => css`
        border-${placement.toLowerCase()}: 8px solid;
    `};
`;

StyledStatusIndicator.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_INDICATOR_STATUSES)).isRequired,
};

export const Text = styled.div`
    display: flex;
    align-items: center;

    ${({ placement, theme }) => placement === STATUS_INDICATOR_PLACEMENTS.LEFT && css`
        padding: ${theme.spacing(0, 0, 0, 1)};
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.NONE && css`
        border-color: transparent;
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.DISABLED && css`
        border-color: ${({ theme }) => theme.colorDisabled};
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.ERROR && css`
        border-color: ${({ theme }) => theme.colorInvalid};
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.VALID && css`
        border-color: ${({ theme }) => theme.colorValid};
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.DEFAULT && css`
        border-color: ${({ theme }) => theme.colorPrimary};
    `}

    ${({ status }) => status === STATUS_INDICATOR_STATUSES.WARNING && css`
        border-color: ${({ theme }) => theme.colorAlert};
    `}
`;

Text.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_INDICATOR_STATUSES)).isRequired,
    theme: themePropTypes,
};

StyledStatusIndicator.defaultProps = {
    theme: themeBasic,
};

