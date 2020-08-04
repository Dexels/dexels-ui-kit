import { AdornmentWrapper, StyledListItem } from './ListItem.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

export interface ListItemProps {
    adornment?: ReactNode;
    children?: ReactNode;
    color?: string;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    onClick?: MouseEventHandler;
}

export const ListItem: FunctionComponent<ListItemProps> = ({
    adornment,
    children,
    color,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    onClick,
}) => (
    <StyledListItem
        color={color}
        hasOnClickAction={onClick !== undefined}
        isDisabled={isDisabled}
        isFocused={isFocused}
        isHovered={isHovered}
        onClick={onClick}
    >
        {adornment && (
            <AdornmentWrapper isDisabled={isDisabled} isFocused={isFocused} isHovered={isHovered}>
                {adornment}
            </AdornmentWrapper>
        )}
        {children}
    </StyledListItem>
);

export default ListItem;
