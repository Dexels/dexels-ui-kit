import ListItem, { ListItemProps } from '../../../components/atoms/ListItem/ListItem';
import { shallow, ShallowWrapper } from 'enzyme';
import { AdornmentWrapper } from '../../../components/atoms/ListItem/ListItem.sc';
import Icon from '../../../components/atoms/Icon/Icon';
import { IconType } from '../../../types';
import React from 'react';

describe('test component ListItem', () => {
    let wrapper: ShallowWrapper<ListItemProps>;

    beforeEach(() => {
        wrapper = shallow(<ListItem />) as ShallowWrapper<ListItemProps>;
    });

    test('passing props to children', () => {
        wrapper.setProps({
            adornment: <Icon type={IconType.SEARCH} />,
            isDisabled: true,
            isFocused: true,
            isHovered: true,
        });

        expect(wrapper.find(AdornmentWrapper)).toHaveLength(1);
        expect(wrapper.find(AdornmentWrapper).prop('isFocused')).toBeTruthy();
        expect(wrapper.find(AdornmentWrapper).prop('isDisabled')).toBeTruthy();
        expect(wrapper.find(AdornmentWrapper).prop('isHovered')).toBeTruthy();
    });

    test('onClick should fire when clicked', () => {
        const mockCallbackFn = jest.fn();
        wrapper.setProps({ onClick: mockCallbackFn });
        wrapper.simulate('click');
        expect(mockCallbackFn).toHaveBeenCalled();
    });
});
