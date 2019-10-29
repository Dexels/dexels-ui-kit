// import { number, select, text } from '@storybook/addon-knobs';
import './Tooltip.css';
import React, { useRef } from 'react';
import TooltipV2 from './TooltipV2';

export default { title: 'molecules/TooltipV2' };

export const Configurable = () => {
    const tooltip = useRef();

    const handleOnMouseOut = () => {
        tooltip.current.handleOnMouseOut(tooltip);
    };

    const handleOnMouseOver = (evt) => {
        tooltip.current.handleOnMouseOver(evt, tooltip);
    };

    const createBtn = (id, text) => (
        <button
            id={id}
            onBlur={() => {}}
            onFocus={() => {}}
            onMouseOut={handleOnMouseOut}
            onMouseOver={handleOnMouseOver}
            text={text}
            type={'button'}
        >
            {text}
        </button>
    );

    return (
        <>
            {createBtn('btnLeft', 'click 1')}
            {createBtn('btnRight', 'click 2')}
            {createBtn('btnBtmR', 'click 3')}
            {createBtn('btnCenter', 'click 4')}
            <TooltipV2
                elevation={TooltipV2.defaultProps.elevation}
                ref={tooltip}
                transitionDuration={TooltipV2.defaultProps.transitionDuration}
                transitionEasing={TooltipV2.defaultProps.transitionEasing}
            />
        </>
    );
};
