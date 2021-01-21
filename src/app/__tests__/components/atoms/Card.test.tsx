import Card, { CardProps } from '../../../components/atoms/Card/Card';
import { shallow, ShallowWrapper } from 'enzyme';
import { Elevation } from '../../../types';
import React from 'react';

describe('test component Card', () => {
    let wrapper: ShallowWrapper<CardProps>;

    beforeEach(() => {
        const card = (
            <Card>
                <span className="test" />
            </Card>
        );

        wrapper = shallow(card) as ShallowWrapper<CardProps>;
    });

    test('render Card', () => {
        wrapper.setProps({
            elevation: Elevation.LEVEL_12,
            hasBorderRadius: true,
            hasFullheightContent: true,
        });

        expect(wrapper.find('span').hasClass('test')).toBe(true);
        expect(wrapper.props().elevation).toBe(Elevation.LEVEL_12);
        expect(wrapper.props().hasFullheightContent).toBe(true);
        expect(wrapper.props().hasBorderRadius).toBe(true);
    });
});
