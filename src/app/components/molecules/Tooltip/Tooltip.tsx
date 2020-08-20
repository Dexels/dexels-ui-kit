import { Easing, Elevation, Placement } from '../../../types';
import React, { FunctionComponent, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { isEmpty } from '../../../utils/functions/validateFunctions';
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
    const [isTooltipVisible, setIsTooltipVisible] = useState(false);
    const [timeoutId, setTimeoutId] = useState<number | null>(null);
    const [tooltipPosition, setTooltipPosition] = useState(position);
    const [tooltipTitle, setTooltipTitle] = useState('');
    const { spacingValue } = useContext(ThemeContext);
    const tooltipRef = useRef<HTMLDivElement>(null);

    const showTooltip = (hoveredItem: DOMRect): void => {
        setTooltipPosition(getTooltipPosition(hoveredItem, tooltipPosition));
        setIsTooltipVisible(!isEmpty(tooltipTitle));
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
                    setIsTooltipVisible(false);
                    setTooltipDelay(false);
                }, delay)
            );
        } else {
            setIsTooltipVisible(false);
            setTooltipDelay(false);
        }
    };

    /* eslint-disable @typescript-eslint/no-unsafe-member-access */
    /* eslint-disable @typescript-eslint/no-unsafe-call */
    const onMouseMove = useCallback(
        ({ target }) => {
            if (target.closest(`[${dataTooltipComponent}]`) && (!isTooltipVisible || timeoutId)) {
                handleOnMouseOver(target && (target.closest(`[${dataTooltipComponent}]`) as HTMLElement));
            } else if (!target.closest(`[${dataTooltipComponent}]`) && isTooltipVisible && !timeoutId) {
                handleOnMouseOut();
            }
        },
        [hasTooltipDelay, isTooltipVisible, timeoutId]
    );

    /* eslint-enable @typescript-eslint/no-unsafe-call */
    /* eslint-enable @typescript-eslint/no-unsafe-member-access */

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
            const bottomOffset = document.documentElement.clientHeight - hoveredElement.top + spacingValue * 2;
            const leftOffset = hoveredElement.left + (hoveredElement.width - tooltipWidth) / 2;
            left = leftOffset < 0 ? '0' : `${leftOffset}px`;
            bottom = bottomOffset < 0 ? '0' : `${bottomOffset}px`;
        } else if (tooltipPosition === Placement.RIGHT) {
            const topOffset = hoveredElement.top + (hoveredElement.height - tooltipHeight) / 2;
            const leftOffset = hoveredElement.right + spacingValue * 2;
            left = leftOffset < 0 ? '0' : `${leftOffset}px`;
            top = topOffset < 0 ? '0' : `${topOffset}px`;
        } else if (tooltipPosition === Placement.BOTTOM) {
            const topOffset = hoveredElement.bottom + spacingValue * 2;
            const leftOffset = hoveredElement.left + (hoveredElement.width - tooltipWidth) / 2;
            left = leftOffset < 0 ? '0' : `${leftOffset}px`;
            top = topOffset < 0 ? '0' : `${topOffset}px`;
        } else {
            const rightOffset = document.documentElement.clientWidth - hoveredElement.left + spacingValue * 2;
            const topOffset = hoveredElement.top + (hoveredElement.height - tooltipHeight) / 2;
            right = rightOffset < 0 ? '0' : `${rightOffset}px`;
            top = topOffset < 0 ? '0' : `${topOffset}px`;
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
