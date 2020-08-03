import { Elevation, IconType } from '../../../types';
import { Header, Item, Left, Right, StyledCardNoResults, Title } from './CardNoResults.sc';
import React, { FunctionComponent, ReactNode } from 'react';
import { colorKeys } from '../../../styles/theming/colorKeys';
import { getColorsFromTheme } from '../../../styles/theming/getColorsFromTheme';
import IconCustomizable from '../IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../IconCustomizable/types';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface CardNoResultsProps {
    children?: never;
    className?: string;
    elevation?: Elevation;
    header: ReactNode;
    iconType: IconType;
    itemPrefix?: string;
    items?: ReactNode[];
    title: ReactNode;
}

export const CardNoResults: FunctionComponent<CardNoResultsProps> = ({
    className,
    elevation = Elevation.LEVEL_1,
    header,
    iconType,
    itemPrefix = '-',
    items = [],
    title,
}) => {
    const colors = getColorsFromTheme(themeBasic, colorKeys);

    return (
        <StyledCardNoResults className={className} elevation={elevation}>
            <Left>
                <IconCustomizable
                    iconColor={colors['colorText-primary']}
                    iconSize={IconCustomizableSize.SIZE30}
                    iconType={iconType}
                />
            </Left>
            <Right>
                <Header>{header}</Header>
                <Title>{title}</Title>
                {items.length > 0 &&
                    items.map((item) => (
                        <Item key={item?.toString()}>
                            {`${itemPrefix} `}
                            {item}
                        </Item>
                    ))}
            </Right>
        </StyledCardNoResults>
    );
};

export default CardNoResults;
