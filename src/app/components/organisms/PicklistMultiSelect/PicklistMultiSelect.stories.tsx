import React, { FunctionComponent } from 'react';
import { boolean } from '@storybook/addon-knobs';
import PicklistMultiSelect from './PicklistMultiSelect';

export default { title: 'organisms/PicklistMultiSelect' };

export const Configurable: FunctionComponent = () => <PicklistMultiSelect isDisabled={boolean('Is disabled', false)} />;
