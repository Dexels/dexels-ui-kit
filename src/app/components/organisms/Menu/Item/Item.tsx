import { IconSize, IconType } from '../../../../types';
import { IconWrapper, Inner, StyledItem, TextWrapper } from './Item.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Icon from '../../../atoms/Icon/Icon';
import { NavLink } from 'react-router-dom';
import TextWithOptionalIcon from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

interface ItemsProps {
    children?: ReactNode;
    exact?: boolean;
    hasChildren?: boolean;
    iconType?: IconType;
    isDisabled?: boolean;
    isOpen?: boolean;
    isParent?: boolean;
    onClick?: MouseEventHandler;
    path?: string;
}

const Item: FunctionComponent<ItemsProps> = ({
    children,
    exact = false,
    hasChildren = false,
    iconType,
    isDisabled = false,
    isOpen = false,
    isParent = false,
    onClick,
    path,
}) => (
    <StyledItem hasChildren={hasChildren} isDisabled={isDisabled} isParent={isParent}>
        <Inner
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            as={path ? NavLink : ('div' as any)}
            exact={exact}
            onClick={isDisabled ? null : onClick}
            to={path}
        >
            <TextWrapper>
                <TextWithOptionalIcon iconSize={IconSize.MEDIUM} iconType={iconType} isTruncatable>
                    {children}
                </TextWithOptionalIcon>
            </TextWrapper>
            {hasChildren && (
                <IconWrapper>
                    <Icon type={isOpen ? IconType.CHEVRONUP : IconType.CHEVRONDOWN} />
                </IconWrapper>
            )}
        </Inner>
    </StyledItem>
);

export default Item;
