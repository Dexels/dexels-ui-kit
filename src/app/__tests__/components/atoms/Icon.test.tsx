import Icon, { IconProps } from '../../../components/atoms/Icon/Icon';
import { shallow, ShallowWrapper } from 'enzyme';
import { IconType } from '../../../types';
import React from 'react';

describe('test component Icon', () => {
    let wrapper: ShallowWrapper<IconProps>;

    beforeEach(() => {
        const icon = <Icon type={IconType.SEARCH} />;

        wrapper = shallow(icon) as ShallowWrapper<IconProps>;
    });

    test('render Icon with adornment props', () => {
        wrapper.setProps({ type: IconType.SEARCH });
        expect(wrapper.find('span').hasClass('ICON-SEARCH')).toBe(true);
    });
});
