import { TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS, TOOLTIP_TRANSITIONS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledTooltip } from './Tooltip.sc';

const Tooltip = ({
    children,
    elevation,
    placement,
    title,
    transitionDuration,
    transitionType,
}) => (
    <StyledTooltip
        data-tooltip={title}
        elevation={elevation}
        placement={placement}
        transitionDuration={transitionDuration}
        transitionType={transitionType}
    >
        {children}
    </StyledTooltip>
);

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.placements = TOOLTIP_PLACEMENTS;
Tooltip.transitionTypes = TOOLTIP_TRANSITIONS;

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    placement: PropTypes.oneOf(Object.values(Tooltip.placements)),
    title: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number,
    transitionType: PropTypes.oneOf(Object.values(Tooltip.transitionTypes)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_1,
    placement: Tooltip.placements.BOTTOM,
    transitionDuration: 0.4,
    transitionType: Tooltip.transitionTypes.EASE_IN_OUT,
};

export default Tooltip;
