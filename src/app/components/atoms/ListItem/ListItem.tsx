import { AdornmentWrapper, StyledListItem } from './ListItem.sc';
import React, { FunctionComponent, ReactNode } from 'react';

export interface ListItemProps {
    adornment?: ReactNode;
    children?: ReactNode;
    isDisabled?: boolean;
    isFocused?: boolean;
    isHovered?: boolean;
}

export const ListItem: FunctionComponent<ListItemProps> = ({
    adornment,
    children,
    isDisabled = false,
    isFocused = false,
    isHovered = false,
}) => (
    <StyledListItem>
        {adornment && (
            <AdornmentWrapper isDisabled={isDisabled} isFocused={isFocused} isHovered={isHovered}>
                {adornment}
            </AdornmentWrapper>
        )}
        {children}
    </StyledListItem>
);

export default ListItem;
