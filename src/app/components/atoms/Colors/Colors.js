import {
    Color,
    ColorGroup,
    ColorGroupName,
    ColorText,
    StyledColors,
} from './Colors.sc';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

const Colors = () => {
    const theme = useContext(ThemeContext);

    const colorKeys = [
        'colorBodyText',
        'colorDisabled',
        'colorError',
        'colorHeaderText',
        'colorPrimary',
        'colorSecondary',
        'colorTertiary',
        'colorValid',
        'colorWarning',
        'shade1',
        'shade2',
        'shade3',
        'shade4',
        'shade5',
        'shade6',
        'shade7',
        'shade8',
        'shade9',
    ];

    return (
        <StyledColors>
            {colorKeys.map((colorKey) => (
                <ColorGroup key={colorKey}>
                    <ColorGroupName>
                        {colorKey}
                    </ColorGroupName>
                    {typeof theme[colorKey] === 'object' ? (
                        Object.keys(theme[colorKey]).map((colorName) => (
                            <Color color={theme[colorKey][colorName]} key={colorName}>
                                <ColorText color={theme[colorKey][colorName]}>
                                    {colorName}
                                </ColorText>
                                <ColorText color={theme[colorKey][colorName]}>
                                    {theme[colorKey][colorName]}
                                </ColorText>
                            </Color>
                        ))
                    ) : (
                        <Color color={theme[colorKey]} key={theme[colorKey]}>
                            <ColorText color={theme[colorKey]}>
                                {theme[colorKey]}
                            </ColorText>
                        </Color>
                    )}
                </ColorGroup>
            ))}
        </StyledColors>
    );
};

export default Colors;
