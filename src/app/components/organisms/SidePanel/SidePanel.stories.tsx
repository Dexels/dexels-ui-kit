import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import SidePannel from './SidePanel';
import { text } from '@storybook/addon-knobs';

export default { title: 'organisms/SidePanel' };

const functionalItems = [
    <Button iconType={IconType.CHECK} key={1} onClick={action('On button CHECK 1')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
    <Button iconType={IconType.CHECK} isDisabled key={2} onClick={action('On button CHECK 2')} size={ButtonSize.SMALL}>
        {'longer label'}
    </Button>,
];

export const Configurable: FunctionComponent = () => (
    <SidePannel isVisible options={functionalItems} title={text('Header title', 'Heading')}>
        {text('Body', 'Some body text')}
    </SidePannel>
);

export const ConfigurableSidePannel: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={(): void => {
                    action('On back');
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'SIDE PANNEL IS SHOWING' : 'SHOW SIDE PANNEL'}
            </Button>
            <SidePannel
                isVisible={isVisible}
                onBack={(): void => {
                    action('On back');
                    setIsVisible(false);
                }}
                options={functionalItems}
                title={text('Header title', 'Heading')}
            >
                {text('Body', 'Some body text')}
            </SidePannel>
        </>
    );
};
