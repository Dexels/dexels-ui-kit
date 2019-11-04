import Button from '../Button/Button';
import Chip from '../Chip/Chip';
import React from 'react';
import { renderToString } from 'react-dom/server';
import TextIcon from '../TextIcon/TextIcon';
import Tooltip from './Tooltip';

export default { title: 'molecules/Tooltip' };

export const Configurable = () => {
    const MyComponent = () => (
        <span>
            {'CLICK TO REDIRECT TO '}
            <a href="https://www.google.nl" rel="noopener noreferrer" target="_blank">
                {'GOOGLE'}
            </a>
        </span>
    );

    return (
        <>
            <div
                id={'btnLeft'}
                style={{
                    left: '-60px',
                    position: 'absolute',
                    top: '100px',
                }}
            >
                <Button
                    data-tooltip-component={renderToString(<MyComponent />)}
                    data-tooltip-delay
                    onClick={() => {}}
                    size={'SMALL'}
                >
                    {'Click 1'}
                </Button>
            </div>
            <div
                id={'btnRight'}
                style={{
                    float: 'right',
                    position: 'absolute',
                    right: '-80px',
                    top: '10px',
                }}
                type={'button'}
            >
                <Button
                    data-tooltip-component={'click 2'}
                    onClick={() => {}}
                    size={'SMALL'}
                >
                    {'Click 2'}
                </Button>
            </div>
            <Button
                data-tooltip-component={'tooltip'}
                onClick={() => {}}
                size={'SMALL'}
            >
                {'Click me!'}
            </Button>
            <div
                id={'btnBtmR'}
                style={{
                    position: 'absolute',
                    right: '190px',
                }}
                type={'button'}
            >
                <TextIcon
                    data-tooltip-component={'click 3'}
                    text={'A'}
                />
            </div>
            <div
                id={'btnCenter'}
                style={{
                    left: '150px',
                    position: 'absolute',
                    top: '300px',
                }}
                type={'button'}
            >
                <Chip
                    data-tooltip-component={'click 4'}
                    onClick={() => {}}
                >
                    {'Click 4'}
                </Chip>
            </div>
            <Tooltip
                elevation={Tooltip.defaultProps.elevation}
                transitionDuration={Tooltip.defaultProps.transitionDuration}
                transitionEasing={Tooltip.defaultProps.transitionEasing}
            />
        </>
    );
};
