import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import SelectionControl from './SelectionControl';

export default { title: 'molecules/SelectionControl' };

export const ConfigurableRadioButton = () => {
    const [gender, setGender] = useState('female');
    const direction = select('Direction', SelectionControl.directions, SelectionControl.defaultProps.direction);
    const hasError = boolean('Has error', SelectionControl.defaultProps.hasError);
    const isDisabled = boolean('Is disabled', SelectionControl.defaultProps.isDisabled);
    const isValid = boolean('Is valid', SelectionControl.defaultProps.isValid);

    return (
        <>
            <p>
                {'Select your gender'}
            </p>
            <br />
            <SelectionControl
                direction={direction}
                hasError={hasError}
                isChecked={gender === 'female'}
                isDisabled={isDisabled}
                isValid={isValid}
                label={text('Label 1', 'Im a girl')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('female');
                }}
                type={SelectionControl.types.RADIO}
                value="female"
            />
            <div style={{ height: '8px' }} />
            <SelectionControl
                direction={direction}
                errorMessage={text('Errormessage', 'Oops, something went wrong!')}
                hasError={hasError}
                isChecked={gender === 'male'}
                isDisabled={isDisabled}
                isValid={isValid}
                label={text('Label 2', 'Im a boy')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('male');
                }}
                type={SelectionControl.types.RADIO}
                value="male"
            />
        </>
    );
};

export const ConfigurableCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);

    return (
        <SelectionControl
            direction={select('Direction', SelectionControl.directions, SelectionControl.defaultProps.direction)}
            errorMessage={text('Errormessage', 'Oops, something went wrong!')}
            hasError={boolean('Has error', SelectionControl.defaultProps.hasError)}
            isChecked={isChecked}
            isDisabled={boolean('Is disabled', SelectionControl.defaultProps.isDisabled)}
            isValid={boolean('Is valid', SelectionControl.defaultProps.isValid)}
            label={text('Label 1', 'Im a girl')}
            name="a-radio-button-name"
            onChange={() => {
                setIsChecked(!isChecked);
            }}
            type={SelectionControl.types.CHECKBOX}
            value="female"
        />
    );
};
