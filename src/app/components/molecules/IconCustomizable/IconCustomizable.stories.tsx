import React, { FunctionComponent } from 'react';
import { colorKeys } from '../../../styles/theming/colorKeys';
import { getColorsFromTheme } from '../../../styles/theming/getColorsFromTheme';
import IconCustomizable from './IconCustomizable';
import { IconCustomizableSize } from './types';
import { IconType } from '../../../types';
import { select } from '@storybook/addon-knobs';
import { themeBasic } from '../../../styles/theming/themes/basic';

export default { title: 'molecules/IconCustomizable' };

export const Configurable: FunctionComponent = () => {
    const colors = getColorsFromTheme(themeBasic, colorKeys);

    return (
        <IconCustomizable
            iconColor={select('IconCustomizable Color', colors, colors['colorHeaderText-primary'])}
            iconSize={select('IconCustomizable Size', IconCustomizableSize, IconCustomizableSize.SIZE48)}
            iconType={select('IconCustomizable Type', IconType, IconType.ARROWRIGHT)}
        />
    );
};
