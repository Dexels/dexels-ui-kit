import {
    DatePickerDataProps,
    EditableDropdownDataProps,
} from '../../../components/organisms/EditableInformation/types';
import { DEFAULT_LOCALE } from '../../../../global/constants';
import { EditableDataComponent } from '../../../types';
import { fruits } from '../../../components/organisms/EditableInformation/mockup/editableInformationData';
import { isValidEditableInput } from '../../../components/organisms/EditableInformation/utils/informationDataFunctions';
import moment from 'moment';

describe('test function isValidEditableInput', () => {
    test('test isRequired DatePicker', () => {
        const data = [
            {
                component: EditableDataComponent.DATEPICKER,
                isEditable: true,
                isRequired: true,
                label: 'Date',
                name: 'Date',
                value: null,
            } as DatePickerDataProps,
        ];

        expect(
            isValidEditableInput(
                data,
                {
                    Date: moment(),
                },
                DEFAULT_LOCALE
            )
        ).toBe(true);

        expect(
            isValidEditableInput(
                data,
                {
                    Date: null,
                },
                DEFAULT_LOCALE
            )
        ).toBe(false);
    });

    test('test isRequired Dropdown', () => {
        const data = [
            {
                component: EditableDataComponent.DROPDOWN,
                isEditable: true,
                isRequired: true,
                label: 'Dropdown',
                name: 'Dropdown',
                nameTextValue: ' DropdownId',
                options: fruits,
                value: '',
            } as EditableDropdownDataProps,
        ];

        expect(
            isValidEditableInput(
                data,
                {
                    Dropdown: '',
                },
                DEFAULT_LOCALE
            )
        ).toBe(false);

        expect(
            isValidEditableInput(
                data,
                {
                    Dropdown: '2',
                },
                DEFAULT_LOCALE
            )
        ).toBe(true);
    });
});
