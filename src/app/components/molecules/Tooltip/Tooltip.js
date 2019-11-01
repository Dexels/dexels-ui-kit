import React, { useCallback, useEffect, useState } from 'react';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import { StyledTooltip } from './Tooltip.sc';

const Tooltip = ({
    elevation,
    transitionDuration,
    transitionEasing,
}) => {
    const [tooltipPosition, setTooltipPosition] = useState('bottom');
    const [tooltipTitle, setTooltipTitle] = useState(null);
    const [isTooltipVisible, setTooltipVisiblity] = useState(false);
    const [hasTooltipDelay, setTooltipDelay] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);

    const calculateTooltipPosition = (hoveredItem) => {
        const docWidth = document.documentElement.clientWidth;
        const docHeight = document.documentElement.clientHeight;

        const spaceFromBottom = docHeight - hoveredItem.bottom;
        const spaceFromTop = hoveredItem.top;
        const spaceFromRightSide = docWidth - hoveredItem.right;
        const spaceFromLeftSide = hoveredItem.left;

        if (spaceFromBottom < 100) {
            if (spaceFromTop < 100) {
                if (spaceFromRightSide < 100) {
                    setTooltipPosition('left');
                } else if (spaceFromLeftSide < 100) {
                    setTooltipPosition('right');
                }
            } else {
                setTooltipPosition('top');
            }
        } else if (spaceFromTop < 100) {
            if (spaceFromRightSide < 100) {
                setTooltipPosition('left');
            } else if (spaceFromBottom < 100) {
                setTooltipPosition('right');
            } else {
                setTooltipPosition('bottom');
            }
        }
    };

    const show = (hoveredItem) => {
        calculateTooltipPosition(hoveredItem);
        setTooltipVisiblity(true);
    };

    const hide = () => {
        if (hasTooltipDelay) {
            setTimeout(() => {
                setTooltipVisiblity(false);
                setTooltipDelay(false);
            }, 4000);
        } else {
            setTooltipVisiblity(false);
            setTooltipDelay(false);
        }
    };

    const handleOnMouseOver = (element) => {
        console.log("HI :", element.getAttribute('data-tooltip-component')[0])
        setTooltipTitle(element.getAttribute('data-tooltip-component'));
        setTooltipDelay(element.getAttribute('data-tooltip-delay'));
        setHoveredElement(element.getBoundingClientRect());
        show(element.getBoundingClientRect());
    };

    const handleOnMouseOut = () => {
        hide();
    };

    const handler = useCallback(({ x, y }) => {
        const element = document.elementFromPoint(x, y);

        if (element.getAttribute('data-tooltip-component')) {
            handleOnMouseOver(element);
        } else {
            handleOnMouseOut();
        }
    });

    useEffect(() => {
        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    }, [handler]);

    const style = {
        left: hoveredElement ? ((String(hoveredElement.x)).concat('px')) : 0,
        top: hoveredElement ? ((String(hoveredElement.y)).concat('px')) : 0,
    };

    return (
        <StyledTooltip
            elevation={elevation}
            style={style}
            tooltipPosition={tooltipPosition}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
            visibility={isTooltipVisible ? 'visible' : 'hidden'}
        >
            {tooltipTitle}
        </StyledTooltip>
    );
};

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.transitionEasings = TOOLTIP_EASINGS;

Tooltip.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Tooltip.transitionEasings)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_6,
    transitionDuration: 300,
    transitionEasing: Tooltip.transitionEasings.EASE,
};

export default Tooltip;
