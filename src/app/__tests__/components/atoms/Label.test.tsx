import Label, { LabelProps } from '../../../components/atoms/Label/Label';
import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';

describe('test component Label', () => {
    let wrapper: ShallowWrapper<LabelProps>;

    beforeEach(() => {
        const label = <Label />;

        wrapper = shallow(label) as ShallowWrapper<LabelProps>;
    });

    test('render Label', () => {
        wrapper.setProps({
            hasAlternativeTextStyle: true,
            hasError: true,
            isActive: true,
            isDisabled: true,
            isFocused: true,
            isHovered: true,
            isSelectionControlLabel: true,
            isSmall: true,
            isTruncatable: true,
            isValid: true,
        });

        expect(wrapper.props().isSmall).toBe(true);
        expect(wrapper.props().isValid).toBe(true);
    });
});
