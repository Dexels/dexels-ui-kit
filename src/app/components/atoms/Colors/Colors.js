import {
    Color,
    ColorGroup,
    ColorGroupName,
    ColorText,
    StyledColors,
} from './Colors.sc';
import React, { useContext } from 'react';
import { colorKeys } from '../../../styles/theming/colorKeys';
import { ThemeContext } from 'styled-components';

const Colors = () => {
    const theme = useContext(ThemeContext);

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
