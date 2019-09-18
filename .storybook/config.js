import { addDecorator, configure } from '@storybook/react';

// Make knobs addon available in all stories
addDecorator(withKnobs);

configure(require.context('../src', true, /\.stories\.js$/), module);
