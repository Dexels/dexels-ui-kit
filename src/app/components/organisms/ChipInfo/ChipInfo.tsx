import React, { FunctionComponent, useContext } from 'react';
import { StyledChipInfo, StyledIcon, StyledText } from './ChipInfo.sc';
import { IconCustomizable } from '../../molecules/IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../../molecules/IconCustomizable/types';
import { IconType } from '../../../types';
import { ThemeContext } from 'styled-components';

export interface ChipInfoProps {
    className?: string;
    iconType: IconType;
    text?: string;
}

export const ChipInfo: FunctionComponent<ChipInfoProps> = ({ className, iconType, text }) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledChipInfo>
            <StyledIcon>
                <IconCustomizable
                    className={className}
                    iconColor={theme.shades.three}
                    iconSize={IconCustomizableSize.SIZE14}
                    iconType={iconType}
                />
            </StyledIcon>
            <StyledText>{text}</StyledText>
        </StyledChipInfo>
    );
};

export default ChipInfo;
