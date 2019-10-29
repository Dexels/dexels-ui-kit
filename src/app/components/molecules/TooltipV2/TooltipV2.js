import { StyledTooltip, StyledTooltipWrapper } from './TooltipV2.sc';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './TooltipV2.consts';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class TooltipV2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverRect: null,
            isTooltipVisible: false,
            tooltipPosition: 'bottom',
            tooltipTitle: null,
            x: 0,
            y: 0,
        };
    }

    handleOnMouseOver = (evt, tooltip) => {
        // get hovered tooltipTitle reference
        const el = evt.currentTarget;

        if (el != null) {
            const rect = el.getBoundingClientRect();
            console.log('HI! ', rect);
            tooltip.current.show(rect, el.textContent);
        }
    };

    handleOnMouseOut = (tooltip) => {
        tooltip.current.hide();
    };

    pastShow(hoverRect) {
        // position the tooltip after showing it
        const ttNode = ReactDOM.findDOMNode(this);
        let { tooltipPosition } = this.state;
        let x = 0;
        let y = 0;

        if (ttNode !== null) {
            console.log("NODE IS NOW: ", ttNode);
            const docWidth = document.documentElement.clientWidth;
            const docHeight = document.documentElement.clientHeight;

            const rx = hoverRect.x + hoverRect.width; // most right x
            const lx = hoverRect.x; // most left x
            const ty = hoverRect.y; // most top y
            const by = hoverRect.y + hoverRect.height; // most bottom y

            const ttRect = ttNode.getBoundingClientRect();
            const spaceFromRightSide = docWidth - hoverRect.right;
            const spaceFromLeftSide = hoverRect.left;
            const spaceFromTop = hoverRect.top;
            const spaceFromBottom = docHeight - hoverRect.bottom;

            // the tooltip doesn't fit to the right
            if (spaceFromRightSide < 150) {
                console.log("the tooltip doesn't fit to the right");
                x = rx;
                y = ty + (hoverRect.height - ttRect.height);

                if (y < 0) {
                    y = ty;
                }

                if (spaceFromBottom < 150) {
                    tooltipPosition = 'top';
                } else {
                    tooltipPosition = 'bottom';
                }
            } else if (spaceFromBottom < 100) {
                console.log("the tooltip doesn't fit to the bottom");
                y = by;
                x = lx + (hoverRect.width - ttRect.width);

                if (x < 0) {
                    x = lx;
                }

                if (spaceFromTop < 100) {
                    tooltipPosition = 'right';
                } else {
                    tooltipPosition = 'top';
                }
            } else if (spaceFromLeftSide < 150) {
                console.log("the tooltip doesn't fit to the left");
                x = lx - ttRect.width;
                y = ty + (hoverRect.height - ttRect.height);

                if (y < 0) {
                    y = ty;
                }

                if (spaceFromBottom < 150) {
                    tooltipPosition = 'top';
                } else {
                    tooltipPosition = 'bottom';
                }
            } else if (spaceFromTop < 100) {
                console.log("the tooltip doesn't fit to the top");
                y = ty - ttRect.height;
                x = lx + (hoverRect.width - ttRect.width);

                if (x < 0) {
                    x = lx;
                }

                if (spaceFromBottom < 100) {
                    tooltipPosition = 'right';
                } else {
                    tooltipPosition = 'bottom';
                }
            }
        }

        this.setState({
            tooltipPosition,
            x,
            y,
        });
    }

    show(hoverRect, elem) {
        const { pastShow } = this;

        this.setState({
            hoverRect,
            isTooltipVisible: true,
            tooltipTitle: elem,
        },
        pastShow.bind(this, hoverRect));
    }

    hide() {
        this.setState({ isTooltipVisible: false });
    }

    render() {
        const { state } = this;
        const { props } = this;
        const visibility = state.isTooltipVisible ? 'visible' : 'hidden';

        const style = {
            // left: ((state.x + window.scrollX) + 'px'),
            // top: ((state.y + 20) + 'px')
            left: state.hoverRect ? ((state.hoverRect.x + 40) + 'px') : 0,
            top: state.hoverRect ? ((state.hoverRect.y + 8) + 'px') : 0,
        };

        // console.log("TI SKATA GINETAI EDW tooltipPosition: ", state.tooltipPosition);
        // console.log("TI SKATA GINETAI EDW visibility: ", visibility);

        return (
            <StyledTooltipWrapper>
                <StyledTooltip
                    elevation={props.elevation}
                    style={style}
                    tooltipPosition={state.tooltipPosition}
                    transitionDuration={props.transitionDuration}
                    transitionEasing={props.transitionEasing}
                    visibility={visibility}
                >
                    {state.tooltipTitle}
                </StyledTooltip>
            </StyledTooltipWrapper>
        );
    }
}

TooltipV2.elevations = TOOLTIP_ELEVATIONS;
TooltipV2.transitionEasings = TOOLTIP_EASINGS;

TooltipV2.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TooltipV2.elevations)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(TooltipV2.transitionEasings)),
};

TooltipV2.defaultProps = {
    elevation: TooltipV2.elevations.LEVEL_6,
    transitionDuration: 300,
    transitionEasing: TooltipV2.transitionEasings.EASE,
};

export default TooltipV2;
