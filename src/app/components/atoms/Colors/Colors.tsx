import { Color, ColorGroup, ColorGroupName, ColorText, StyledColors } from './Colors.sc';
import React, { FunctionComponent, useContext } from 'react';
import { colorKeys } from '../../../styles/theming/colorKeys';
import { ThemeContext } from 'styled-components';

const Colors: FunctionComponent = () => {
    const theme = useContext(ThemeContext);

    return (
        <StyledColors>
            {colorKeys.map((colorKey) => (
                <ColorGroup key={colorKey}>
                    <ColorGroupName>{colorKey}</ColorGroupName>
                    {typeof theme[colorKey] === 'object' ? (
                        Object.keys(theme[colorKey]).map((colorName) => (
                            <Color color={theme[colorKey][colorName] as string} key={colorName}>
                                <ColorText color={theme[colorKey][colorName] as string}>{colorName}</ColorText>
                                <ColorText color={theme[colorKey][colorName] as string}>
                                    {theme[colorKey][colorName] as string}
                                </ColorText>
                            </Color>
                        ))
                    ) : (
                        <Color color={theme[colorKey] as string} key={theme[colorKey] as string}>
                            <ColorText color={theme[colorKey] as string}>{theme[colorKey]}</ColorText>
                        </Color>
                    )}
                </ColorGroup>
            ))}
        </StyledColors>
    );
};

export default Colors;
