import { boolean, select, text } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import RadioButton from './RadioButton';

export default { title: 'molecules/RadioButton' };

export const Configurable = () => {
    const [gender, setGender] = useState('female');

    return (
        <>
            <p>
                {'Select your gender'}
            </p>
            <br />
            <RadioButton
                direction={select('Direction', RadioButton.directions, RadioButton.defaultProps.direction)}
                hasError={boolean('Has error', RadioButton.defaultProps.hasError)}
                isChecked={gender === 'female'}
                isDisabled={boolean('Is disabled', RadioButton.defaultProps.isDisabled)}
                isValid={boolean('Is valid', RadioButton.defaultProps.isValid)}
                label={text('Label 1', 'Im a girl')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('female');
                }}
                value="female"
            />
            <div style={{ height: '8px' }} />
            <RadioButton
                direction={select('Direction', RadioButton.directions, RadioButton.defaultProps.direction)}
                errorMessage={text('Errormessage', 'Oops, something went wrong!')}
                hasError={boolean('Has error', RadioButton.defaultProps.hasError)}
                isChecked={gender === 'male'}
                isDisabled={boolean('Is disabled', RadioButton.defaultProps.isDisabled)}
                isValid={boolean('Is valid', RadioButton.defaultProps.isValid)}
                label={text('Label 2', 'Im a boy')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('male');
                }}
                value="male"
            />
        </>
    );
};
