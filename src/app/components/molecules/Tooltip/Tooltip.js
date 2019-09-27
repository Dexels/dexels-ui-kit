import { StyledTooltip, StyledTooltipContainer } from './Tooltip.sc';
import { TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Tooltip = ({
    children,
    elevation,
    placement,
    title,
}) => (
    <StyledTooltipContainer
        id="TooltipContainer"
    >
        {children}
        <StyledTooltip
            elevation={elevation}
            id="Tooltip"
            placement={placement}
            title={title}
        >
            {title}
        </StyledTooltip>
    </StyledTooltipContainer>
    // <>
    //     {/* Make sure the children are in a span tag otherwise icons will not work properly */}
    //     <span
    //         aria-describedby="Tooltip"
    //         id="TooltipContainer"
    //     >
    //         {children}
    //     </span>
    //     <StyledTooltip
    //         aria-hidden="true"
    //         elevation={elevation}
    //         id="Tooltip"
    //         placement={placement}
    //         role="tooltip"
    //         title={title}
    //     />
    // </>
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
    placement: Tooltip.placements.TOP_CENTER,
};

export default Tooltip;
