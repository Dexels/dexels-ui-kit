import React, {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
} from 'react';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './Tooltip.consts';
import PropTypes from 'prop-types';
import { StyledTooltip } from './Tooltip.sc';
import { ThemeContext } from 'styled-components';

const getTooltipPosition = (hoveredItem, tooltipPosition) => {
    const docWidth = document.documentElement.clientWidth;
    const docHeight = document.documentElement.clientHeight;
    const spaceFromBottom = docHeight - hoveredItem.bottom;
    const spaceFromTop = hoveredItem.top;
    const spaceFromRightSide = docWidth - hoveredItem.right;
    const spaceFromLeftSide = hoveredItem.left;
    let position = tooltipPosition;

    if (tooltipPosition === 'bottom') {
        if (spaceFromBottom < 100) {
            if (spaceFromTop < 100) {
                if (spaceFromRightSide < 150) {
                    position = 'left';
                } else if (spaceFromLeftSide < 150) {
                    position = 'right';
                } else {
                    position = 'left';
                }
            } else {
                position = 'top';
            }
        }
    } else if (tooltipPosition === 'top') {
        if (spaceFromTop < 100) {
            if (spaceFromBottom < 100) {
                if (spaceFromRightSide < 150) {
                    position = 'left';
                } else if (spaceFromBottom < 100) {
                    position = 'right';
                } else {
                    position = 'left';
                }
            } else {
                position = 'bottom';
            }
        }
    } else if (tooltipPosition === 'right') {
        if (spaceFromRightSide < 150) {
            if (spaceFromBottom < 100) {
                if (spaceFromTop < 100) {
                    position = 'left';
                } else {
                    position = 'top';
                }
            } else {
                position = 'bottom';
            }
        }
    } else if (tooltipPosition === 'left') {
        if (spaceFromLeftSide < 150) {
            if (spaceFromBottom < 100) {
                if (spaceFromTop < 100) {
                    position = 'right';
                } else {
                    position = 'top';
                }
            } else {
                position = 'bottom';
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
    const [tooltipTitle, setTooltipTitle] = useState('some text');
    const { spacingValue } = useContext(ThemeContext);
    const tooltipRef = useRef(null);

    const showTooltip = (hoveredItem) => {
        setTooltipPosition(getTooltipPosition(hoveredItem, tooltipPosition));
        setTooltipVisiblity(true);
    };

    const handleOnMouseOver = (element) => {
        setTooltipPosition(position);

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        setTooltipTitle(element.getAttribute('data-tooltip-component'));
        setTooltipDelay(element.getAttribute('data-tooltip-delay'));

        if (element.getAttribute('data-tooltip-position')) {
            setTooltipPosition(element.getAttribute('data-tooltip-position').toLowerCase());
        }

        setHoveredElement(element.getBoundingClientRect());
    };

    const handleOnMouseOut = () => {
        if (hasTooltipDelay) {
            setTimeoutId(setTimeout(() => {
                setTooltipVisiblity(false);
                setTooltipDelay(false);
            }, 4000));
        } else {
            setTooltipVisiblity(false);
            setTooltipDelay(false);
        }
    };

    const onMouseMove = useCallback(({ target }) => {
        if (target.closest('[data-tooltip-component]') && (!isTooltipVisible || timeoutId)) {
            handleOnMouseOver(target.closest('[data-tooltip-component]'));
        } else if (!target.closest('[data-tooltip-component]') && isTooltipVisible && !timeoutId) {
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
        if (tooltipPosition === 'top') {
            bottom = `${document.documentElement.clientHeight - hoveredElement.top + (spacingValue * 2)}px`;
            left = `${hoveredElement.left + ((hoveredElement.width - tooltipWidth) / 2)}px`;
        } else if (tooltipPosition === 'right') {
            top = `${hoveredElement.top + ((hoveredElement.height - tooltipHeight) / 2)}px`;
            left = `${hoveredElement.right + (spacingValue * 2)}px`;
        } else if (tooltipPosition === 'bottom') {
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
            tooltipPosition={tooltipPosition}
            top={top}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        />
    );
};

Tooltip.elevations = TOOLTIP_ELEVATIONS;
Tooltip.transitionEasings = TOOLTIP_EASINGS;

Tooltip.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Tooltip.elevations)),
    position: PropTypes.string,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Tooltip.transitionEasings)),
};

Tooltip.defaultProps = {
    elevation: Tooltip.elevations.LEVEL_6,
    position: 'bottom',
    transitionDuration: 300,
    transitionEasing: Tooltip.transitionEasings.EASE,
};

export default Tooltip;
