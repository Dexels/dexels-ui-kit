import basicTheme from '../../../styles/theming/themes/basic';
import { colorKeys } from '../../../styles/theming/colorKeys';
import getColorsFromTheme from '../../../styles/theming/getColorsFromTheme';
import Icon from './Icon';
import React from 'react';
import { select } from '@storybook/addon-knobs';

export default { title: 'atoms/Icon' };

/* eslint-disable sort-keys */
// The sort-keys ESLint rule is disabled so that we can order the sizes from small to large
// @TODO try to use the ThemeContext here, doesn't work atm
// Already opened an issue: https://github.com/storybookjs/storybook/issues/8531
export const Configurable = () => {
    const colors = getColorsFromTheme(basicTheme, colorKeys);

    return (
        <div
            style={{
                color: select('Color', colors, colors['colorHeaderText-primary']),
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
            <Icon type={select('Type', Icon.types, Icon.types.CALENDAR)} />
        </div>
    );
};
/* eslint-enable */
