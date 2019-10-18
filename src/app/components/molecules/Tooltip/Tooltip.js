import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTooltip } from './Tooltip.sc';

const Tooltip = ({
    children,
    elevation,
    placement,
    title,
    transitionDuration,
    transitionEasing,
}) => (
    <StyledTooltip
        data-tooltip={title}
        elevation={elevation}
        placement={placement}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
    >
        {children}
    </StyledTooltip>
);

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.placements = TOOLTIP_PLACEMENTS;
Tooltip.transitionEasings = TOOLTIP_EASINGS;

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    placement: PropTypes.oneOf(Object.values(Tooltip.placements)),
    title: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Tooltip.transitionEasings)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_6,
    placement: Tooltip.placements.BOTTOM,
    transitionDuration: 300,
    transitionEasing: Tooltip.transitionEasings.EASE,
};

export default Tooltip;
