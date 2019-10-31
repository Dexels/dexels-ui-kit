import { STATUS_INDICATOR_PLACEMENTS, STATUS_INDICATOR_STATUSES } from './StatusIndicator.consts';
import styled, { css } from 'styled-components';
import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import PropTypes from 'prop-types';

export const StyledStatusIndicator = styled.div`
    display: flex;
    align-items: center;
    border-radius: inherit;
    border-color: ${({ status, theme }) => getStatusColor(status, theme)};
    color: ${({ status, theme }) => getStatusColor(status, theme)};
    width: 100%;
    height: 100%;

    ${({ placement }) => css`
        border-${placement.toLowerCase()}: 8px solid;
    `};
`;

StyledStatusIndicator.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
    status: PropTypes.oneOf(Object.values(STATUS_INDICATOR_STATUSES)).isRequired,
};

export const StyledStatusIndicatorText = styled.div`
    display: flex;
    align-items: center;

    ${({ placement, theme }) => css`
        ${placement === STATUS_INDICATOR_PLACEMENTS.LEFT && css`
            padding-left: ${theme.spacing(1)};
        `};
    `};
`;

StyledStatusIndicatorText.propTypes = {
    placement: PropTypes.oneOf(Object.values(STATUS_INDICATOR_PLACEMENTS)).isRequired,
};

