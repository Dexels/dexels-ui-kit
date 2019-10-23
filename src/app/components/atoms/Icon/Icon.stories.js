import basicTheme from '../../../styles/theming/basic';
import flattenTheme from '../../../styles/theming/flattenTheme';
import Icon from './Icon';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'atoms/Icon' };

/* eslint-disable sort-keys */
// The sort-keys ESLint rule is disabled so that we can order the sizes from small to large
export const Configurable = () => {
    const colors = flattenTheme(basicTheme);

    return (
        <div
            style={{
                color: select('Color', colors, colors['colorPrimary-dark']),
                fontSize: select('Size', {
                    XS: '12px',
                    S: '16px',
                    M: '20px',
                    L: '24px',
                    XL: '28px',
                    XXL: '32px',
                }, '24px'),
            }}
        >
            <Icon type={select('Type', Icon.types, Icon.types.ARROW_DOWN)} />
        </div>
    );
};
/* eslint-enable */
