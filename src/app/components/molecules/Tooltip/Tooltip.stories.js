import './Tooltip.css';
import React from 'react';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

export const Configurable = () => {
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
            {createBtn('btnLeft', 'click 1', true)}
            {createBtn('btnRight', 'click 2')}
            {createBtn('btnBtmR', 'click 3')}
            {createBtn('btnCenter', 'click 4')}
            <Tooltip
                elevation={Tooltip.defaultProps.elevation}
                transitionDuration={Tooltip.defaultProps.transitionDuration}
                transitionEasing={Tooltip.defaultProps.transitionEasing}
            />
        </>
    );
};
