import React, { useState } from 'react';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.sc';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import PropTypes from 'prop-types';

const Tooltip = ({
    children,
    elevation,
    title,
    transitionDuration,
    transitionEasing,
}) => {
    const [tooltipPosition, setTooltipPosition] = useState('bottom');

    const findTooltipPosition = () => {
        const component = document.getElementById('StyledTooltipWrapper');
        const space = window.innerHeight - component.offsetTop + component.offsetHeight;

        if (space < 150) {
            setTooltipPosition('top');
        }
    };

    window.onfocus = () => {
        findTooltipPosition();
    };

    window.onresize = () => {
        findTooltipPosition();
    };

    return (
        <StyledTooltipWrapper id={'StyledTooltipWrapper'}>
            {children}
            <StyledTooltip
                // data-tooltip={title}
                elevation={elevation}
                tooltipPosition={tooltipPosition}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
            >
                {title}
            </StyledTooltip>
        </StyledTooltipWrapper>
    );
};

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.transitionEasings = TOOLTIP_EASINGS;

Tooltip.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    title: PropTypes.string.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Tooltip.transitionEasings)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_6,
    transitionDuration: 300,
    transitionEasing: Tooltip.transitionEasings.EASE,
};

export default Tooltip;
