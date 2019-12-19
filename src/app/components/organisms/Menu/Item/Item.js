import {
    IconWrapper,
    Inner,
    StyledItem,
    TextWrapper,
} from './Item.sc';
import Icon from '../../../atoms/Icon/Icon';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import TextWithOptionalIcon from '../../../molecules/TextWithOptionalIcon/TextWithOptionalIcon';

const Item = ({
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
        isOpen={isOpen}
        isParent={isParent}
    >
        <Inner
            as={path ? NavLink : 'div'}
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

Item.propTypes = {
    children: PropTypes.node.isRequired,
    exact: PropTypes.bool,
    hasChildren: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(Item.iconTypes)),
    isDisabled: PropTypes.bool,
    isOpen: PropTypes.bool,
    isParent: PropTypes.bool,
    onClick: PropTypes.func,
    path: PropTypes.string,
};

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
