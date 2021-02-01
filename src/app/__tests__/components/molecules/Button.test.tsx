import Button, { ButtonProps } from '../../../components/molecules/Button/Button';
import { ButtonSize, Size } from '../../../types';
import { shallow, ShallowWrapper } from 'enzyme';
import Loader from '../../../components/molecules/Loader/Loader';
import React from 'react';
import TextWithOptionalIcon from '../../../components/molecules/TextWithOptionalIcon/TextWithOptionalIcon';

describe('test component Button', () => {
    let wrapper: ShallowWrapper<ButtonProps>;

    beforeEach(() => {
        wrapper = shallow(<Button />) as ShallowWrapper<ButtonProps>;
    });

    test('render without props', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.containsMatchingElement(<TextWithOptionalIcon />)).toEqual(true);
        expect(wrapper.props().size).toBe(ButtonSize.LARGE);
    });

    test('render with loading state', () => {
        wrapper.setProps({ isLoading: true });
        expect(wrapper.containsMatchingElement(<Loader size={Size[ButtonSize.LARGE]} />)).toEqual(true);
    });

    test('onClick should fire when clicked', () => {
        const mockCallbackFn = jest.fn();
        wrapper.setProps({ onClick: mockCallbackFn });
        wrapper.simulate('click');
        expect(mockCallbackFn).toHaveBeenCalled();
    });
});
