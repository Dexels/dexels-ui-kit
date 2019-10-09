import * as colors from '../../../styles/colors/colors';
import { StyledColor, StyledColorText, StyledColorWrapper } from './Colors.sc';
import React from 'react';

const Colors = () => (
    <StyledColorWrapper>
        {Object.keys(colors).map((colorName) => (
            <StyledColor color={colors[colorName]} key={colorName}>
                <StyledColorText color={colors[colorName]}>
                    {colorName}
                </StyledColorText>
            </StyledColor>
        ))}
    </StyledColorWrapper>
);

Colors.colors = colors;

export default Colors;
