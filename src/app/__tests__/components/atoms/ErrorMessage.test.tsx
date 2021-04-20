import ErrorMessage, { ErrorMessageProps } from '../../../components/atoms/ErrorMessage/ErrorMessage';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('test component ErrorMessage', () => {
    let wrapper: ShallowWrapper<ErrorMessageProps>;

    beforeEach(() => {
        const error = (
            <ErrorMessage isOutlineVariant={false}>
                <span className="test" />
            </ErrorMessage>
        );

        wrapper = shallow(error) as ShallowWrapper<ErrorMessageProps>;
    });

    test('render ErrorMessage', () => {
        expect(wrapper.find('span').hasClass('test')).toBe(true);
    });
});
