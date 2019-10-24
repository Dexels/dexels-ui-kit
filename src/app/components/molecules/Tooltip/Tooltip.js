import React, { useEffect, useRef, useState } from 'react';
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
    const tooltip = useRef();

    const findTooltipPosition = () => {
        const component = tooltip.current;
        const spaceFromBottom = window.innerHeight - component.offsetTop + component.offsetHeight;
        const spaceFromTop = component.offsetTop;
        const spaceFromRightSide = window.innerWidth - component.getBoundingClientRect().right;
        const spaceFromLeftSide = window.innerWidth - component.getBoundingClientRect().left;

        if (spaceFromBottom < 150) {
            setTooltipPosition('top');
        }

        if (spaceFromTop < 50 && spaceFromBottom < 150) {
            setTooltipPosition('right');
        }

        if (spaceFromRightSide < 150) {
            // setTooltipPosition('right');
        }

        if (spaceFromLeftSide < 150) {
            // setTooltipPosition('right');
        }
    };

    useEffect(() => {
        window.addEventListener('resize', findTooltipPosition);
        window.addEventListener('focus', findTooltipPosition);

        return () => {
            window.removeEventListener('resize', findTooltipPosition);
            window.removeEventListener('focus', findTooltipPosition);
        };
    }, []);

    return (
        <StyledTooltipWrapper ref={tooltip}>
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
