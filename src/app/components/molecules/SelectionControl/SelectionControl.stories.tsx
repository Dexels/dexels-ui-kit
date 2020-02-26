import {
    boolean,
    number,
    select,
    text,
} from '@storybook/addon-knobs';
import { Direction, Easing } from '../../../types';
import React, { useState } from 'react';
import SelectionControl from './SelectionControl';
import { SelectionControlType } from './types';

export default { title: 'molecules/SelectionControl' };

export const ConfigurableRadioButton = () => {
    const [gender, setGender] = useState('female');
    const direction = select('Direction', Direction, SelectionControl.defaultProps.direction);
    const hasError = boolean('Has error', SelectionControl.defaultProps.hasError);
    const isDisabled = boolean('Is disabled', SelectionControl.defaultProps.isDisabled);
    const isValid = boolean('Is valid', SelectionControl.defaultProps.isValid);
    const transitionDuration = number('Transition duration', SelectionControl.defaultProps.transitionDuration);

    const transitionEasing = select(
        'Transition type',
        Easing,
        SelectionControl.defaultProps.transitionEasing,
    );

    return (
        <>
            <p>
                {'Select your gender'}
            </p>
            <br />
            <SelectionControl
                direction={direction}
                hasError={hasError}
                hasHorizontalCorrection={boolean('Has horizontal correction',
                    SelectionControl.defaultProps.hasHorizontalCorrection)}
                hasVerticalCorrection={boolean('Has vertical correction',
                    SelectionControl.defaultProps.hasVerticalCorrection)}
                isChecked={gender === 'female'}
                isDisabled={isDisabled}
                isValid={isValid}
                label={text('Label 1', 'Im a girl')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('female');
                }}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
                type={SelectionControlType.RADIO}
                value="female"
            />
            <div style={{ height: '12px' }} />
            <SelectionControl
                direction={direction}
                errorMessage={text('Errormessage', 'Oops, something went wrong!')}
                hasError={hasError}
                hasHorizontalCorrection={boolean('Has horizontal correction',
                    SelectionControl.defaultProps.hasHorizontalCorrection)}
                hasVerticalCorrection={boolean('Has vertical correction',
                    SelectionControl.defaultProps.hasVerticalCorrection)}
                isChecked={gender === 'male'}
                isDisabled={isDisabled}
                isValid={isValid}
                label={text('Label 2', 'Im a boy')}
                name="a-radio-button-name"
                onChange={() => {
                    setGender('male');
                }}
                transitionDuration={transitionDuration}
                transitionEasing={transitionEasing}
                type={SelectionControlType.RADIO}
                value="male"
            />
        </>
    );
};

export const ConfigurableCheckbox = () => {
    const [isChecked, setIsChecked] = useState(false);
    const transitionDuration = number('Transition duration', SelectionControl.defaultProps.transitionDuration);

    const transitionEasing = select(
        'Transition type',
        Easing,
        SelectionControl.defaultProps.transitionEasing,
    );

    return (
        <SelectionControl
            direction={select('Direction', Direction, SelectionControl.defaultProps.direction)}
            errorMessage={text('Errormessage', 'Oops, something went wrong!')}
            hasError={boolean('Has error', SelectionControl.defaultProps.hasError)}
            hasHorizontalCorrection={boolean('Has horizontal correction',
                SelectionControl.defaultProps.hasHorizontalCorrection)}
            hasVerticalCorrection={boolean('Has vertical correction',
                SelectionControl.defaultProps.hasVerticalCorrection)}
            isChecked={isChecked}
            isDisabled={boolean('Is disabled', SelectionControl.defaultProps.isDisabled)}
            isIndeterminate={boolean('Is indeterminate', SelectionControl.defaultProps.isIndeterminate)}
            isValid={boolean('Is valid', SelectionControl.defaultProps.isValid)}
            label={text('Label', 'Im a girl')}
            name="a-checkbox-name"
            onChange={() => {
                setIsChecked(!isChecked);
            }}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
            type={SelectionControlType.CHECKBOX}
            value="female"
        />
    );
};
