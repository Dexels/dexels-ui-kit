import { Direction, IconSize, IconType } from '../../../types';
import { IconCustomizable, IconCustomizableSize } from '../../../components/molecules/IconCustomizable';
import { shallow, ShallowWrapper } from 'enzyme';
import TextWithOptionalIcon, {
    TextWithOptionalIconProps,
} from '../../../components/molecules/TextWithOptionalIcon/TextWithOptionalIcon';
import React from 'react';
import { Text } from '../../../components/molecules/TextWithOptionalIcon/TextWithOptionalIcon.sc';

describe('test component TextWithOptionalIcon', () => {
    let wrapper: ShallowWrapper<TextWithOptionalIconProps>;

    beforeEach(() => {
        const textWithOptionalIcon = <TextWithOptionalIcon className="test-text-with-option-icon" />;

        wrapper = shallow(textWithOptionalIcon) as ShallowWrapper<TextWithOptionalIconProps>;
    });

    test('render without props', () => {
        expect(wrapper.exists()).toBe(true);
        expect(wrapper.hasClass('test-text-with-option-icon')).toBe(true);
        expect(wrapper.props().direction).toBe(Direction.LTR);
        expect(wrapper.find(Text).prop('isCapitalized')).toBeFalsy();
    });

    test('passing props to children', () => {
        const iconType = IconType.CHECK;

        wrapper.setProps({
            iconSize: IconSize.MEDIUM,
            iconType,
            isCapitalized: true,
            isSelectable: false,
            isTruncatable: true,
        });

        expect(wrapper.find(IconCustomizable).prop('iconSize')).toBe(IconCustomizableSize.SIZE20);
        expect(wrapper.find(IconCustomizable).prop('iconType')).toBe(IconType.CHECK);
        expect(wrapper.find(Text).prop('isCapitalized')).toBeTruthy();
        expect(wrapper.find(Text).prop('isSelectable')).toBeFalsy();
        expect(wrapper.find(Text).prop('isTruncatable')).toBeTruthy();
    });
});
