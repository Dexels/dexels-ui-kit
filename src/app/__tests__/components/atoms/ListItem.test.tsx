import { AdornmentWrapper } from '../../../components/atoms/ListItem/ListItem.sc';
import Icon from '../../../components/atoms/Icon/Icon';
import { IconType } from '../../../types';
import ListItem from '../../../components/atoms/ListItem/ListItem';
import React from 'react';
import { shallow } from 'enzyme';

describe('test component ListItem', () => {
    // snapshop tests: tests if the component has changed since the last test. maybe we don't want this at all
    // it('renders correctly', () => {
    //     const wrapper = shallow(<ListItem />);

    //     expect(wrapper).toMatchSnapshot();
    // });

    test('render ListItem with adornment props', () => {
        const wrapper = shallow(<ListItem adornment={<Icon type={IconType.SEARCH} />} />);
        expect(wrapper.find(AdornmentWrapper)).toHaveLength(1);
    });
});
