import ListItem, { ListItemProps } from '../../../components/atoms/ListItem/ListItem';
import { shallow, ShallowWrapper } from 'enzyme';
import { AdornmentWrapper } from '../../../components/atoms/ListItem/ListItem.sc';
import Icon from '../../../components/atoms/Icon/Icon';
import { IconType } from '../../../types';
import React from 'react';

describe('test component ListItem', () => {
    let wrapper: ShallowWrapper<ListItemProps>;

    beforeEach(() => {
        const listItem = <ListItem />;

        wrapper = shallow(listItem) as ShallowWrapper<ListItemProps>;
    });

    test('render ListItem with adornment props', () => {
        wrapper.setProps({ adornment: <Icon type={IconType.SEARCH} /> });
        expect(wrapper.find(AdornmentWrapper)).toHaveLength(1);
    });
});
