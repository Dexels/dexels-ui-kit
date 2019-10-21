import * as colors from '../../../styles/colors/colors';
import Icon from './Icon';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'atoms/Icon' };

/* eslint-disable sort-keys */
// The sort-keys ESLint rule is disabled so that we can order the sizes from small to large
export const Configurable = () => (
    <div
        style={{
            color: select('Color', colors, colors.blue100),
            fontSize: select('Size', {
                XS: '8px',
                S: '12px',
                M: '16px',
                L: '20px',
                XL: '24px',
                XXL: '28px',
            }, '16px'),
        }}
    >
        <Icon type={select('Type', Icon.types, Icon.types.ARROW_DOWN)} />
    </div>
);
/* eslint-enable */
