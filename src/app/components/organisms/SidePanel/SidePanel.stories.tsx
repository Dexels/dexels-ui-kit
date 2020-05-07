import { ButtonSize, ButtonVariant, IconType, Size } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { select, text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import SidePanel from './SidePanel';

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
    <SidePanel
        buttons={[
            {
                iconType: IconType.CROSS,
                onClick: action('On back'),
            },
        ]}
        isVisible
        options={functionalItems}
        size={select('Size', Size, Size.MEDIUM)}
        title={text('Header title', 'Heading')}
    >
        {text('Body', 'Some body text')}
    </SidePanel>
);

export const ConfigurableSidePanel: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    const onBack = (): void => {
        action('On back');
        setIsVisible(false);
    };

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
            <SidePanel
                buttons={[
                    {
                        iconType: IconType.CROSS,
                        onClick: onBack,
                    },
                ]}
                isVisible={isVisible}
                options={functionalItems}
                size={select('Size', Size, Size.MEDIUM)}
                title={text('Header title', 'Heading')}
            >
                {text('Body', 'Some body text')}
            </SidePanel>
        </>
    );
};
