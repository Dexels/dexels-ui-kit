import { StyledTooltip, StyledTooltipWrapper } from './TooltipV3.sc';
import { TOOLTIP_EASINGS, TOOLTIP_ELEVATIONS } from './TooltipV3.consts';
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';

class TooltipV3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hoverRect: null,
            isTooltipVisible: false,
            tooltipDelay: false,
            tooltipPosition: 'bottom',
            tooltipTitle: null,
        };
    }

    handleOnMouseOver = (element, tooltip) => {
        const tooltipTitle = element.getAttribute('data-tooltip-component');
        // const delay = element.getAttribute('data-tooltip-delay');
        // this.setState({ tooltipDelay: delay });

        if (element != null) {
            const rect = element.getBoundingClientRect();
            console.log('HI! ', rect, element);
            tooltip.current.show(rect, tooltipTitle);
        }
    };

    handleOnMouseOut = (tooltip) => {
        const { state } = this;
        const delay = state.tooltipDelay;

        if (delay) {
            console.log('ARE YOU GOING TO DELAY OR NAH?');
            setTimeout(function () {
                tooltip.current.hide();
            }, 4000);
        } else {
            tooltip.current.hide();
        }
    };

    pastShow(hoverRect) {
        // position the tooltip after showing it
        const ttNode = ReactDOM.findDOMNode(this);
        let { tooltipPosition } = this.state;

        if (ttNode !== null) {
            // console.log("NODE IS NOW: ", ttNode);
            const docWidth = document.documentElement.clientWidth;
            const docHeight = document.documentElement.clientHeight;

            const spaceFromRightSide = docWidth - hoverRect.right;
            const spaceFromLeftSide = hoverRect.left;
            const spaceFromTop = hoverRect.top;
            const spaceFromBottom = docHeight - hoverRect.bottom;

            // the tooltip doesn't fit to the right
            if (spaceFromRightSide < 150) {
                // console.log("the tooltip doesn't fit to the right");
                if (spaceFromBottom < 150) {
                    tooltipPosition = 'top';
                } else {
                    tooltipPosition = 'bottom';
                }
            } else if (spaceFromBottom < 100) {
                // console.log("the tooltip doesn't fit to the bottom");
                if (spaceFromTop < 100) {
                    tooltipPosition = 'right';
                } else {
                    tooltipPosition = 'top';
                }
            } else if (spaceFromLeftSide < 150) {
                // console.log("the tooltip doesn't fit to the left");
                if (spaceFromBottom < 150) {
                    tooltipPosition = 'top';
                } else {
                    tooltipPosition = 'bottom';
                }
            } else if (spaceFromTop < 100) {
                // console.log("the tooltip doesn't fit to the top");
                if (spaceFromBottom < 100) {
                    tooltipPosition = 'right';
                } else {
                    tooltipPosition = 'bottom';
                }
            }
        }

        this.setState({
            tooltipPosition,
        });
    }

    show(hoverRect, tooltipTitle) {
        const { pastShow } = this;

        this.setState({
            hoverRect,
            isTooltipVisible: true,
            tooltipTitle,
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
        const delay = state.tooltipDelay;

        const style = {
            left: state.hoverRect ? ((state.hoverRect.x + 40) + 'px') : 0,
            top: state.hoverRect ? ((state.hoverRect.y + 8) + 'px') : 0,
        };

        // console.log("TI SKATA GINETAI EDW tooltipPosition: ", state.tooltipPosition);
        // console.log("TI SKATA GINETAI EDW visibility: ", visibility);
        // console.log("TI SKATA GINETAI EDW title: ", props.title);

        return (
            <StyledTooltipWrapper onClick={() => {}}>
                <StyledTooltip
                    elevation={props.elevation}
                    style={style}
                    tooltipPosition={state.tooltipPosition}
                    transitionDuration={props.transitionDuration}
                    transitionEasing={props.transitionEasing}
                    visibility={visibility}
                >
                    {delay && (
                        <a href={state.tooltipTitle}>
                            {state.tooltipTitle}
                        </a>
                    )}
                    {!delay && state.tooltipTitle}
                </StyledTooltip>
            </StyledTooltipWrapper>
        );
    }
}

TooltipV3.elevations = TOOLTIP_ELEVATIONS;
TooltipV3.transitionEasings = TOOLTIP_EASINGS;

TooltipV3.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TooltipV3.elevations)),
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(TooltipV3.transitionEasings)),
};

TooltipV3.defaultProps = {
    elevation: TooltipV3.elevations.LEVEL_6,
    transitionDuration: 300,
    transitionEasing: TooltipV3.transitionEasings.EASE,
};

export default TooltipV3;
