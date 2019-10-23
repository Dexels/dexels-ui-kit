import {
    Color,
    ColorGroup,
    ColorGroupName,
    ColorName,
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
                            <ColorName color={theme[colorGroup][colorName]}>
                                {colorName}
                                <br />
                                {theme[colorGroup][colorName]}
                            </ColorName>
                        </Color>
                    ))}
                </ColorGroup>
            ))}
        </StyledColors>
    );
};

export default Colors;
