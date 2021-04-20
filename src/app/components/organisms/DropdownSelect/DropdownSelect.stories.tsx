import { boolean, select, text } from '@storybook/addon-knobs';
import { IconType, InputVariant } from '../../../types';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import { DropdownOption } from '../../molecules/Dropdown';
import DropdownSelect from './DropdownSelect';
import { dropdownSelectOptions } from './mockup/data';

export default { title: 'organisms/DropdownSelect' };

const options = dropdownSelectOptions;

// eslint-disable-next-line no-template-curly-in-string
const OPTION_LABEL = "gebruik '{{${variableKey}}}' as chosen fruit";

export const Configurable: FunctionComponent = () => {
    const [value] = useState('');
    const [optionLabel, setOptionLabel] = useState('');

    const onChangeCallback = (option: DropdownOption) => {
        // eslint-disable-next-line no-console
        console.log('onChangeCallback', option);

        if (option) {
            // eslint-disable-next-line no-template-curly-in-string
            setOptionLabel(OPTION_LABEL.replace('{{${variableKey}}}', option.label));
        }
    };

    return (
        <DropdownSelect
            defaultValue="-1"
            errorMessage={text('Error message', 'Help, something went wrong!')}
            footerText={text('Instructions', 'Choose a fruit or type yourself a fruit!')}
            hasError={boolean('Has error', false)}
            iconType={select('Type', IconType, IconType.CLUBPLACEHOLDER1)}
            isDisabled={boolean('Is disabled', false)}
            isSearchAny={boolean('Is search any', false)}
            isValid={boolean('Is valid', false)}
            label={text('Label', 'This is a label')}
            name="an-input-name"
            noResultsMessage={text('No results message', 'No fruit is found!')}
            onChange={onChangeCallback}
            onConfirm={action('On confirm')}
            optionLabel={optionLabel}
            options={options}
            value={value}
            variant={select('Variant', InputVariant, InputVariant.OUTLINE)}
        />
    );
};
