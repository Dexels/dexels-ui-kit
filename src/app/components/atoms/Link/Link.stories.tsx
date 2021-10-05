import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import Link from './Link';
import { text } from '@storybook/addon-knobs';

export default { title: 'atoms/Link' };

/* eslint-disable sort-keys */
// The sort-keys ESLint rule is disabled so that we can order the sizes from small to large
// @TODO try to use the ThemeContext here, doesn't work atm
// Already opened an issue: https://github.com/storybookjs/storybook/issues/8531
export const Configurable: FunctionComponent = () => (
    <Link href={text('Href', 'https://www.google.com')} onClick={action('On click')}>
        {text('Link text', 'www.google.com')}
    </Link>
);
/* eslint-enable */

export const ConfigurableStyledLink: FunctionComponent = () => (
    <Link href={text('Href', 'https://www.google.com')} isStyled onClick={action('On click')}>
        {text('Link text', 'www.google.com')}
    </Link>
);
