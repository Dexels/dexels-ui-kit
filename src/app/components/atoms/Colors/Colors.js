import * as colors from '../../../styles/colors/colors';
import { StyledColor, StyledColorText, StyledColorWrapper } from './Colors.sc';
import React from 'react';

const objectToArray = (object) => {
    const arr = Array.from(Object.keys(object), (element) => ([`${element}`, object[element]]));

    return arr;
};

const Colors = () => (
    <StyledColorWrapper>
        {objectToArray(colors).length > 0 && objectToArray(colors).map((color) => (
            <StyledColor color={color[1]} key={color[0]}>
                <StyledColorText color={color[1]}>
                    {color[0]}
                </StyledColorText>
            </StyledColor>
        ))}
    </StyledColorWrapper>
);

Colors.colors = colors;

export default Colors;
