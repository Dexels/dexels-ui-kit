import { Easing, Elevation, Placement } from '../../../types';
import React, { FunctionComponent, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { StyledTooltip } from './Tooltip.sc';
import { ThemeContext } from 'styled-components';

const dataTooltipComponent = 'data-tooltip-component';
const dataTooltipDelay = 'data-tooltip-delay';
const dataTooltipPosition = 'data-tooltip-position';
const thresholdVertical = 100;
const thresholdHorizontal = 150;

const getTooltipPosition = (hoveredItem: DOMRect, tooltipPosition: Placement): Placement => {
    const docWidth = document.documentElement.clientWidth;
    const docHeight = document.documentElement.clientHeight;
    const spaceFromBottom = docHeight - hoveredItem.bottom;
    const spaceFromTop = hoveredItem.top;
    const spaceFromRightSide = docWidth - hoveredItem.right;
    const spaceFromLeftSide = hoveredItem.left;
    let position = tooltipPosition;

    if (tooltipPosition === Placement.BOTTOM) {
        if (spaceFromBottom < thresholdVertical) {
            if (spaceFromTop < thresholdVertical) {
                if (spaceFromRightSide < thresholdHorizontal) {
                    position = Placement.LEFT;
                } else if (spaceFromLeftSide < thresholdHorizontal) {
                    position = Placement.RIGHT;
                } else {
                    position = Placement.LEFT;
                }
            } else {
                position = Placement.TOP;
            }
        }
    } else if (tooltipPosition === Placement.TOP) {
        if (spaceFromTop < thresholdVertical) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromRightSide < thresholdHorizontal) {
                    position = Placement.LEFT;
                } else if (spaceFromBottom < thresholdVertical) {
                    position = Placement.RIGHT;
                } else {
                    position = Placement.LEFT;
                }
            } else {
                position = Placement.BOTTOM;
            }
        }
    } else if (tooltipPosition === Placement.RIGHT) {
        if (spaceFromRightSide < thresholdHorizontal) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromTop < thresholdVertical) {
                    position = Placement.LEFT;
                } else {
                    position = Placement.TOP;
                }
            } else {
                position = Placement.BOTTOM;
            }
        }
    } else if (tooltipPosition === Placement.LEFT) {
        if (spaceFromLeftSide < thresholdHorizontal) {
            if (spaceFromBottom < thresholdVertical) {
                if (spaceFromTop < thresholdVertical) {
                    position = Placement.RIGHT;
                } else {
                    position = Placement.TOP;
                }
            } else {
                position = Placement.BOTTOM;
            }
        }
    }

    return position;
};

export interface TooltipProps {
    children?: never;
    className?: string;
    delay?: number;
    elevation?: Elevation;
    position?: Placement;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const Tooltip: FunctionComponent<TooltipProps> = ({
    className,
    delay = 4000,
    elevation = Elevation.LEVEL_6,
    position = Placement.BOTTOM,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
}) => {
    const [hasTooltipDelay, setTooltipDelay] = useState(false);
    const [hoveredElement, setHoveredElement] = useState<DOMRect | null>(null);
    const [isTooltipVisible, setTooltipVisiblity] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState(position);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const { spacingValue } = useContext(ThemeContext);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = (hoveredItem: DOMRect): void => {
        setTooltipPosition(getTooltipPosition(hoveredItem, tooltipPosition));
        setTooltipVisiblity(true);
    };

    const handleOnMouseOver = (element: HTMLElement): void => {
        setTooltipPosition(position);

        if (timeoutId) {
            clearTimeout(timeoutId);
            setTimeoutId(null);
        }

        setTooltipTitle(element.getAttribute(dataTooltipComponent) || '');
        setTooltipDelay(!!element.getAttribute(dataTooltipDelay));

        if (element.getAttribute(dataTooltipPosition)) {
            setTooltipPosition(element.getAttribute(dataTooltipPosition) as Placement);
        }

        setHoveredElement(element.getBoundingClientRect());
    };

    const handleOnMouseOut = (): void => {
        if (hasTooltipDelay) {
            setTimeoutId(
                window.setTimeout(() => {
                    setTooltipVisiblity(false);
                    setTooltipDelay(false);
                }, delay)
            );
        } else {
            setTooltipVisiblity(false);
            setTooltipDelay(false);
        }
    };

    const onMouseMove = useCallback(
        ({ target }) => {
            if (target.closest(`[${dataTooltipComponent}]`) && (!isTooltipVisible || timeoutId)) {
                handleOnMouseOver(target.closest(`[${dataTooltipComponent}]`));
            } else if (!target.closest(`[${dataTooltipComponent}]`) && isTooltipVisible && !timeoutId) {
                handleOnMouseOut();
            }
        },
        [hasTooltipDelay, isTooltipVisible, timeoutId]
    );

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);

        return (): void => {
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
        if (tooltipPosition === Placement.TOP) {
            bottom = `${document.documentElement.clientHeight - hoveredElement.top + spacingValue * 2}px`;
            left = `${hoveredElement.left + (hoveredElement.width - tooltipWidth) / 2}px`;
        } else if (tooltipPosition === Placement.RIGHT) {
            top = `${hoveredElement.top + (hoveredElement.height - tooltipHeight) / 2}px`;
            left = `${hoveredElement.right + spacingValue * 2}px`;
        } else if (tooltipPosition === Placement.BOTTOM) {
            top = `${hoveredElement.bottom + spacingValue * 2}px`;
            left = `${hoveredElement.left + (hoveredElement.width - tooltipWidth) / 2}px`;
        } else {
            right = `${document.documentElement.clientWidth - hoveredElement.left + spacingValue * 2}px`;
            top = `${hoveredElement.top + (hoveredElement.height - tooltipHeight) / 2}px`;
        }
    }

    return (
        <StyledTooltip
            bottom={bottom}
            className={className}
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

export default Tooltip;
