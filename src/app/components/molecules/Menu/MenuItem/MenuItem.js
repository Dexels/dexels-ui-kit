import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Divider from '../Divider/Divider';
import Icon from '../../../atoms/Icon/Icon';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import React from 'react';
import StyledMenuItem from './MenuItem.sc';
import TextWithOptionalIcon from '../../TextWithOptionalIcon/TextWithOptionalIcon';

const MenuItem = ({
    children,
    hasDivider,
    iconType,
    isDisabled,
    isExpanded,
    isSelected,
    onClick,
    title,
}) => {
    const handleOnClick = isDisabled ? null : onClick;
    const hasChildren = children !== null;

    return (
        <>
            <StyledMenuItem
                hasChildren={hasChildren}
                isDisabled={isDisabled}
                isSelected={isSelected}
                onClick={handleOnClick}
            >
                <>
                    <Item hasChildren={hasChildren} isParent>
                        <TextWithOptionalIcon iconType={iconType}>
                            {title}
                        </TextWithOptionalIcon>
                        {children && (
                            <ButtonIcon
                                iconType={isSelected ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN}
                                isDisabled={isDisabled}
                                onClick={handleOnClick}
                            />
                        )}
                    </Item>
                    {hasDivider && !isSelected && (
                        <Divider />
                    )}
                </>
            </StyledMenuItem>
            {isExpanded && React.Children.map(children, (child) => (
                React.cloneElement(child)
            ))}
        </>
    );
};

MenuItem.iconTypes = Icon.types;

MenuItem.propTypes = {
    children: PropTypes.node,
    hasDivider: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(MenuItem.iconTypes)),
    isDisabled: PropTypes.bool,
    isExpanded: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    children: null,
    hasDivider: false,
    iconType: null,
    isDisabled: false,
    isExpanded: false,
    isSelected: false,
    onClick: null,
};

export default MenuItem;
