import Button from '../Button/Button';
import React from 'react';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

export const Configurable = () => (
    <>
        <button
            data-tooltip-component={'click 1'}
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
            data-tooltip-delay={false}
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
        <div
            data-tooltip-component={'tooltip'}
            data-tooltip-delay={false}
            style={{
                left: '400px',
                position: 'absolute',
                top: '100px',
            }}
        >
            <Button
                onClick={() => {}}
                size="SMALL"
            >
                {'Click me!'}
            </Button>
        </div>
        <button
            data-tooltip-component={'click 3'}
            data-tooltip-delay={false}
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
            data-tooltip-delay={false}
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
