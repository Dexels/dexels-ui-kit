import { TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTooltip } from './Tooltip.sc';

const Tooltip = ({
    children,
    elevation,
    placement,
    title,
}) => (
    <StyledTooltip
        data-tooltip={title}
        elevation={elevation}
        placement={placement}
    >
        {children}
    </StyledTooltip>
);

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.placements = TOOLTIP_PLACEMENTS;

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    placement: PropTypes.oneOf(Object.values(Tooltip.placements)),
    title: PropTypes.string.isRequired,
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_1,
    placement: Tooltip.placements.BOTTOM,
};

export default Tooltip;
