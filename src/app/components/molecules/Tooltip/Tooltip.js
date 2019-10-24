import React, { useState } from 'react';
import { StyledTooltip, StyledTooltipWrapper } from './Tooltip.sc';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './Tooltip.consts';
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
        const spaceFromBottom = window.innerHeight - component.offsetTop + component.offsetHeight;
        const spaceFromTop = component.offsetTop;

        if (spaceFromBottom < 150) {
            setTooltipPosition('top');
        }

        if (spaceFromTop < 50 && spaceFromBottom < 150) {
            setTooltipPosition('right');
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
