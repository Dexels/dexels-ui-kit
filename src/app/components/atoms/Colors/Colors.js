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
    const colorGroups = Object.keys(theme).filter((themeKey) => typeof theme[themeKey] === 'object');

    return (
        <StyledColors>
            {colorGroups.map((colorGroup) => (
                <ColorGroup key={colorGroup}>
                    <ColorGroupName>
                        {colorGroup}
                    </ColorGroupName>
                    {Object.keys(theme[colorGroup]).map((colorName) => (
                        <Color color={theme[colorGroup][colorName]} key={colorName}>
                            <ColorText color={theme[colorGroup][colorName]}>
                                {colorName}
                            </ColorText>
                            <ColorText color={theme[colorGroup][colorName]}>
                                {theme[colorGroup][colorName]}
                            </ColorText>
                        </Color>
                    ))}
                </ColorGroup>
            ))}
        </StyledColors>
    );
};

export default Colors;
