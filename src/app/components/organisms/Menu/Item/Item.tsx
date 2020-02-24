import { IconSize, IconType } from '../../../../types';
import {
    IconWrapper,
    Inner,
    StyledItem,
    TextWrapper,
} from './Item.sc';
import Icon from '../../../atoms/Icon/Icon';
import { NavLink } from 'react-router-dom';
import React from 'react';
import TextWithOptionalIcon from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

interface ItemsProps {
    exact?: boolean;
    hasChildren?: boolean;
    iconType?: IconType;
    isDisabled?: boolean;
    isOpen?: boolean;
    isParent?: boolean;
    onClick?: React.MouseEventHandler;
    path?: string;
}

const Item: React.FunctionComponent<ItemsProps> = ({
    children,
    exact,
    hasChildren,
    iconType,
    isDisabled,
    isOpen,
    isParent,
    onClick,
    path,
}) => (
    <StyledItem
        hasChildren={hasChildren}
        isDisabled={isDisabled}
        isParent={isParent}
    >
        <Inner
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            as={path ? NavLink : 'div' as any}
            exact={exact}
            onClick={isDisabled ? null : onClick}
            to={path}
        >
            <TextWrapper>
                <TextWithOptionalIcon
                    iconSize={IconSize.MEDIUM}
                    iconType={iconType}
                    isTruncatable
                >
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

Item.defaultProps = {
    exact: false,
    hasChildren: false,
    iconType: null,
    isDisabled: false,
    isOpen: false,
    isParent: false,
    onClick: null,
    path: '',
};

export default Item;
