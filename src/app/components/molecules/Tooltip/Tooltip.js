import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS, TOOLTIP_POSITIONS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import { StyledTooltip } from './Tooltip.sc';
import { ThemeContext } from 'styled-components';

const dataTooltipComponent = 'data-tooltip-component';
const dataTooltipDelay = 'data-tooltip-delay';
const dataTooltipPosition = 'data-tooltip-position';
const thresholdVertical = 100;
const thresholdHorizontal = 150;
const delay = 4000;

const getTooltipPosition = (hoveredItem, tooltipPosition, tooltipPositions) => {
    const docWidth = document.documentElement.clientWidth;
    const docHeight = document.documentElement.clientHeight;
    const spaceFromBottom = docHeight - hoveredItem.bottom;
    const spaceFromTop = hoveredItem.top;
    const spaceFromRightSide = docWidth - hoveredItem.right;
    const spaceFromLeftSide = hoveredItem.left;
    let position = tooltipPosition;

    if (tooltipPosition === tooltipPositions.BOTTOM) {
        if (spaceFromBottom < thresholdVertical) {
            if (spaceFromTop < thresholdVertical) {
                if (spaceFromRightSide < thresholdHorizontal) {
                    position = tooltipPositions.LEFT;
                } else if (spaceFromLeftSide < thresholdHorizontal) {
                    position = tooltipPositions.RIGHT;
                } else {
                    position = tooltipPositions.LEFT;
                }
            } else {
                position = tooltipPositions.TOP;
            }
        }
    } else if (tooltipPosition === tooltipPositions.TOP) {
        if (spaceFromTop < thresholdVertical) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromRightSide < thresholdHorizontal) {
                    position = tooltipPositions.LEFT;
                } else if (spaceFromBottom < thresholdVertical) {
                    position = tooltipPositions.RIGHT;
                } else {
                    position = tooltipPositions.LEFT;
                }
            } else {
                position = tooltipPositions.BOTTOM;
            }
        }
    } else if (tooltipPosition === tooltipPositions.RIGHT) {
        if (spaceFromRightSide < thresholdHorizontal) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromTop < thresholdVertical) {
                    position = tooltipPositions.LEFT;
                } else {
                    position = tooltipPositions.TOP;
                }
            } else {
                position = tooltipPositions.BOTTOM;
            }
        }
    } else if (tooltipPosition === tooltipPositions.LEFT) {
        if (spaceFromLeftSide < thresholdHorizontal) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromTop < thresholdVertical) {
                    position = tooltipPositions.RIGHT;
                } else {
                    position = tooltipPositions.TOP;
                }
            } else {
                position = tooltipPositions.BOTTOM;
            }
        }
    }

    return position;
};

const Tooltip = ({
    elevation,
    position,
    transitionDuration,
    transitionEasing,
}) => {
    const [hasTooltipDelay, setTooltipDelay] = useState(false);
    const [hoveredElement, setHoveredElement] = useState(null);
    const [isTooltipVisible, setTooltipVisiblity] = useState(false);
    const [timeoutId, setTimeoutId] = useState(null);
    const [tooltipPosition, setTooltipPosition] = useState(position);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const { spacingValue } = useContext(ThemeContext);
    const tooltipRef = useRef(null);

    const showTooltip = (hoveredItem) => {
        setTooltipPosition(getTooltipPosition(hoveredItem, tooltipPosition, Tooltip.positions));
        setTooltipVisiblity(true);
    };

    const handleOnMouseOver = (element) => {
        setTooltipPosition(position);

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        setTooltipTitle(element.getAttribute(dataTooltipComponent));
        setTooltipDelay(element.getAttribute(dataTooltipDelay));

        if (element.getAttribute(dataTooltipPosition)) {
            setTooltipPosition(element.getAttribute(dataTooltipPosition));
        }

        setHoveredElement(element.getBoundingClientRect());
    };

    const handleOnMouseOut = () => {
        if (hasTooltipDelay) {
            setTimeoutId(setTimeout(() => {
                setTooltipVisiblity(false);
                setTooltipDelay(false);
            }, delay));
        } else {
            setTooltipVisiblity(false);
            setTooltipDelay(false);
        }
    };

    const onMouseMove = useCallback(({ target }) => {
        if (target.closest(`[${dataTooltipComponent}]`) && (!isTooltipVisible || timeoutId)) {
            handleOnMouseOver(target.closest(`[${dataTooltipComponent}]`));
        } else if (!target.closest(`[${dataTooltipComponent}]`) && isTooltipVisible && !timeoutId) {
            handleOnMouseOut();
        }
    }, [hasTooltipDelay, isTooltipVisible, timeoutId]);

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, [onMouseMove]);

    useEffect(() => {
        if (hoveredElement) {
            showTooltip(hoveredElement);
        }
    }, [hoveredElement]);

    let left = 'auto';
    let top = 'auto';
    let bottom = 'auto';
    let right = 'auto';
    let tooltipWidth = 0;
    let tooltipHeight = 0;

    if (tooltipRef.current) {
        tooltipWidth = tooltipRef.current.offsetWidth;
    }

    if (tooltipRef.current) {
        tooltipHeight = tooltipRef.current.offsetHeight;
    }

    if (hoveredElement) {
        if (tooltipPosition === Tooltip.positions.TOP) {
            bottom = `${document.documentElement.clientHeight - hoveredElement.top + (spacingValue * 2)}px`;
            left = `${hoveredElement.left + ((hoveredElement.width - tooltipWidth) / 2)}px`;
        } else if (tooltipPosition === Tooltip.positions.RIGHT) {
            top = `${hoveredElement.top + ((hoveredElement.height - tooltipHeight) / 2)}px`;
            left = `${hoveredElement.right + (spacingValue * 2)}px`;
        } else if (tooltipPosition === Tooltip.positions.BOTTOM) {
            top = `${hoveredElement.bottom + (spacingValue * 2)}px`;
            left = `${hoveredElement.left + ((hoveredElement.width - tooltipWidth) / 2)}px`;
        } else {
            right = `${document.documentElement.clientWidth - hoveredElement.left + (spacingValue * 2)}px`;
            top = `${hoveredElement.top + ((hoveredElement.height - tooltipHeight) / 2)}px`;
        }
    }

    return (
        <StyledTooltip
            bottom={bottom}
            dangerouslySetInnerHTML={{
                __html: tooltipTitle,
            }}
            elevation={elevation}
            isVisible={isTooltipVisible}
            left={left}
            ref={tooltipRef}
            right={right}
            top={top}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        />
    );
};

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.positions = TOOLTIP_POSITIONS;
Tooltip.transitionEasings = TOOLTIP_EASINGS;

Tooltip.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    position: PropTypes.oneOf(Object.values(Tooltip.positions)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Tooltip.transitionEasings)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_6,
    position: Tooltip.positions.BOTTOM,
    transitionDuration: 300,
    transitionEasing: Tooltip.transitionEasings.EASE,
};

export default Tooltip;
