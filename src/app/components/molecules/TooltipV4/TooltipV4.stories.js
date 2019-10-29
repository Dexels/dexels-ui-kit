// import { number, select, text } from '@storybook/addon-knobs';
import './Tooltip.css';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import TooltipV4 from './TooltipV4';

export default { title: 'molecules/TooltipV4' };

export const Configurable = () => {
    const tooltip = useRef();

    const [coords, setCoords] = useState({
        x: 0,
        y: 0,
    });

    const [isTooltipVisible, setTooltipVisibility] = useState(false);

    const handler = useCallback(({ clientX, clientY }) => {
        // Update coordinates
        setCoords({
            x: clientX,
            y: clientY,
        });

        const element = document.elementFromPoint(clientX, clientY);

        if (element.getAttribute('data-tooltip-component')) {
            // console.log('GEIA XARA NTAN ', element);
            // setTooltipVisibility(true);
            tooltip.current.handleOnMouseOver(element, tooltip);
        } else {
            tooltip.current.handleOnMouseOut(tooltip);
        }
    },
    [setCoords]);

    useEffect(() => {
        window.addEventListener('mousemove', handler);

        return () => {
            window.removeEventListener('mousemove', handler);
        };
    }, []);

    const createBtn = (id, text, delay = false) => (
        <button
            data-tooltip-component={text}
            data-tooltip-delay={delay}
            id={id}
            onBlur={() => {}}
            onFocus={() => {}}
            type={'button'}
        >
            {text}
        </button>
    );

    return (
        <>
            {createBtn("btnLeft", "click 1")}
            {createBtn("btnRight", "click 2")}
            {createBtn("btnBtmR", "click 3")}
            {createBtn("btnCenter", "https://www.youtube.com/")}
            {/* {isTooltipVisible && ( */}
                <TooltipV4
                    elevation={TooltipV4.defaultProps.elevation}
                    ref={tooltip}
                    transitionDuration={TooltipV4.defaultProps.transitionDuration}
                    transitionEasing={TooltipV4.defaultProps.transitionEasing}
                />
            {/* )} */}
        </>
    );
};
