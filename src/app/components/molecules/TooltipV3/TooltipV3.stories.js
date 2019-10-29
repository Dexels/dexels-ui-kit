// import { number, select, text } from '@storybook/addon-knobs';
import './Tooltip.css';
import React, { useCallback, useEffect, useRef } from 'react';
import TooltipV3 from './TooltipV3';

export default { title: 'molecules/TooltipV3' };

export const Configurable = () => {
    const tooltip = useRef();

    const handler = useCallback(({ clientX, clientY }) => {
        const element = document.elementFromPoint(clientX, clientY);

        if (element.getAttribute('data-tooltip-component')) {
            tooltip.current.handleOnMouseOver(element, tooltip);
        } else {
            tooltip.current.handleOnMouseOut(tooltip);
        }
    });

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
            {createBtn('btnLeft', 'click 1')}
            {createBtn('btnRight', 'click 2')}
            {createBtn('btnBtmR', 'click 3')}
            {createBtn('btnCenter', 'https://www.youtube.com/')}
            <TooltipV3
                elevation={TooltipV3.defaultProps.elevation}
                ref={tooltip}
                transitionDuration={TooltipV3.defaultProps.transitionDuration}
                transitionEasing={TooltipV3.defaultProps.transitionEasing}
            />
        </>
    );
};
