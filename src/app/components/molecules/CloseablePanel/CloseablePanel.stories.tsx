import { boolean, select, text } from '@storybook/addon-knobs';
import React, { FunctionComponent, useState } from 'react';
import CloseablePanel from './CloseablePanel';
import { IconType } from '../../../types';

export default { title: 'molecules/CloseablePanel' };

export const Configurable: FunctionComponent = () => {
    const [, setIsOpen] = useState(true);

    return (
        <CloseablePanel
            iconType={select('Icon type', IconType, IconType.FLAG)}
            isLoading={boolean('Is loading', false)}
            onToggleIsOpen={setIsOpen}
            title={text('Title', 'Location')}
        >
            <div>{'The panel has these children'}</div>
        </CloseablePanel>
    );
};
