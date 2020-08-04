import { AdornmentWrapper, StyledListItem } from './ListItem.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';

export interface ListItemProps {
    adornment?: ReactNode;
    children?: ReactNode;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
    onClick?: MouseEventHandler;
}

export const ListItem: FunctionComponent<ListItemProps> = ({
    adornment,
    children,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
    onClick,
}) => (
    <StyledListItem hasOnClickAction={onClick !== undefined} onClick={onClick}>
        {adornment && (
            <AdornmentWrapper isDisabled={isDisabled} isFocused={isFocused} isHovered={isHovered}>
                {adornment}
            </AdornmentWrapper>
        )}
        {children}
    </StyledListItem>
);

export default ListItem;
