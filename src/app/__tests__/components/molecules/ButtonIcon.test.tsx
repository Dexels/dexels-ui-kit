import ButtonIcon, { ButtonIconProps } from '../../../components/molecules/ButtonIcon/ButtonIcon';
import { IconCustomizable, IconCustomizableSize } from '../../../components/molecules/IconCustomizable';
import { IconType, Size } from '../../../types';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('test component Button', () => {
    let wrapper: ShallowWrapper<ButtonIconProps>;

    beforeEach(() => {
        const buttonIcon = <ButtonIcon iconType={IconType.CAMERA} />;

        wrapper = shallow(buttonIcon) as ShallowWrapper<ButtonIconProps>;
    });

    test('render without icon', () => {
        expect(wrapper.exists()).toBe(true);

        expect(
            wrapper.containsMatchingElement(
                <IconCustomizable iconSize={IconCustomizableSize.SIZE20} iconType={wrapper.props().iconType} />
            )
        ).toEqual(true);

        expect(wrapper.props().size).toBe(Size.LARGE);
    });

    test('onClick should fire when clicked', () => {
        const mockCallbackFn = jest.fn();
        wrapper.setProps({ onClick: mockCallbackFn });
        wrapper.simulate('click');
        expect(mockCallbackFn).toHaveBeenCalled();
    });

    test('onClick should not fire when disabled', () => {
        const mockCallbackFn = jest.fn();

        wrapper.setProps({
            isDisabled: true,
            onClick: mockCallbackFn,
        });

        wrapper.simulate('click');
        expect(mockCallbackFn).not.toHaveBeenCalled();
    });
});
