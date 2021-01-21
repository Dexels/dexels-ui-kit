import { colorKeys } from '../../../styles/theming/colorKeys';
import Colors from '../../../components/atoms/Colors/Colors';
import React from 'react';
import { render } from 'enzyme';
import themeBasic from '../../../styles/theming/themes/basic';
import { ThemeProvider } from 'styled-components';

describe('test component Colors', () => {
    const theme = themeBasic;

    test('render Colors', () => {
        const wrapper = render(
            <ThemeProvider theme={theme}>
                <Colors />
            </ThemeProvider>
        );

        expect(wrapper.children()).toHaveLength(colorKeys.length);
    });
});
