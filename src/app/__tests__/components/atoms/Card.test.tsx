import Card, { CardProps } from '../../../components/atoms/Card/Card';
import { shallow, ShallowWrapper } from 'enzyme';
import { Elevation } from '../../../types';
import React from 'react';
import StyledCard from '../../../components/atoms/Card/Card.sc';

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
        expect(wrapper.find(StyledCard).props().elevation).toBe(Elevation.LEVEL_12);
        expect(wrapper.find(StyledCard).props().hasFullheightContent).toBe(true);
        expect(wrapper.find(StyledCard).props().hasBorderRadius).toBe(true);
    });
});
