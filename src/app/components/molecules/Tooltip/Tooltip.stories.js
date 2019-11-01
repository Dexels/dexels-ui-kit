import Button from '../Button/Button';
import React from 'react';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

export const Configurable = () => (
    <>
        <button
            data-tooltip-component={(
                <span>
                    {'HERE'}
                    <a href="https://www.google.nl" rel="noopener noreferrer" target="_blank">
                        {'SOME TEXT'}
                    </a>
                </span>
            )}
            data-tooltip-delay
            id={'btnLeft'}
            onBlur={() => {}}
            onFocus={() => {}}
            style={{
                left: '-60px',
                position: 'absolute',
                top: '0px',
            }}
            type={'button'}
        >
            {'click 1'}
        </button>
        <button
            data-tooltip-component={'click 2'}
            id={'btnRight'}
            onBlur={() => {}}
            onFocus={() => {}}
            style={{
                float: 'right',
                position: 'absolute',
                right: '-80px',
                top: '10px',
            }}
            type={'button'}
        >
            {'click 2'}
        </button>
        <Button
            data-tooltip-component={'tooltip'}
            onClick={() => {}}
        >
            {'Click me!'}
        </Button>
        <button
            data-tooltip-component={'click 3'}
            id={'btnBtmR'}
            onBlur={() => {}}
            onFocus={() => {}}
            style={{
                position: 'absolute',
                right: '70px',
            }}
            type={'button'}
        >
            {'click 3'}
        </button>
        <button
            data-tooltip-component={'click 4'}
            id={'btnCenter'}
            onBlur={() => {}}
            onFocus={() => {}}
            style={{
                left: '150px',
                position: 'absolute',
                top: '300px',
            }}
            type={'button'}
        >
            {'click 4'}
        </button>
        <Tooltip
            elevation={Tooltip.defaultProps.elevation}
            transitionDuration={Tooltip.defaultProps.transitionDuration}
            transitionEasing={Tooltip.defaultProps.transitionEasing}
        />
    </>
);
