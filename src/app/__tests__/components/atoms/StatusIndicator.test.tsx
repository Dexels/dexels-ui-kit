import { shallow, ShallowWrapper } from 'enzyme';
import StatusIndicator, { StatusIndicatorProps } from '../../../components/atoms/StatusIndicator/StatusIndicator';
import React from 'react';
import { Status } from '../../../types';

describe('test component StatusIndicator', () => {
    let wrapper: ShallowWrapper<StatusIndicatorProps>;

    beforeEach(() => {
        const status = <StatusIndicator status={Status.ALERT} />;

        wrapper = shallow(status) as ShallowWrapper<StatusIndicatorProps>;
    });

    test('render StatusIndicator', () => {
        wrapper.setProps({ as: 'span' });
        expect(wrapper.props().status).toBe(Status.ALERT);
        expect(wrapper.props().as).toBe('span');
    });
});
