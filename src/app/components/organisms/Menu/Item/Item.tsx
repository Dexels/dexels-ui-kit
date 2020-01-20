import { IconTypes, IconTypesMap } from '../../../../types';
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
    iconType?: IconTypes;
    isDisabled?: boolean;
    isOpen?: boolean;
    isParent?: boolean;
    onClick?: React.MouseEventHandler;
    path?: string;
}

interface ItemComponent<P> extends React.FunctionComponent<P> {
    iconTypes: IconTypesMap;
}

const Item: ItemComponent<ItemsProps> = ({
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
            as={path ? NavLink : 'div' as any}
            exact={exact}
            onClick={isDisabled ? null : onClick}
            to={path}
        >
            <TextWrapper>
                <TextWithOptionalIcon
                    iconSize={TextWithOptionalIcon.iconSizes.MEDIUM}
                    iconType={iconType}
                    isTruncatable
                >
                    {children}
                </TextWithOptionalIcon>
            </TextWrapper>
            {hasChildren && (
                <IconWrapper>
                    <Icon type={isOpen ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN} />
                </IconWrapper>
            )}
        </Inner>
    </StyledItem>
);

Item.iconTypes = TextWithOptionalIcon.iconTypes;

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
