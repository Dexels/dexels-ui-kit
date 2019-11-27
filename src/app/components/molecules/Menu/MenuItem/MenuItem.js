import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Icon from '../../../atoms/Icon/Icon';
import Item from '../Item/Item';
import PropTypes from 'prop-types';
import React from 'react';
import StyledMenuItem from './MenuItem.sc';
import TextWithOptionalIcon from '../../TextWithOptionalIcon/TextWithOptionalIcon';

const MenuItem = ({
    children,
    iconType,
    isActive,
    isDisabled,
    isExpanded,
    onClick,
    text,
}) => {
    const handleOnClick = isDisabled ? null : onClick;
    const hasChildren = children !== null;

    return (
        <>
            <StyledMenuItem
                hasChildren={hasChildren}
                isActive={isActive}
                isDisabled={isDisabled}
                onClick={handleOnClick}
            >
                <Item isParent>
                    <TextWithOptionalIcon iconType={iconType}>
                        {text}
                    </TextWithOptionalIcon>
                    {children && (
                        <ButtonIcon
                            iconType={isActive ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN}
                            isDisabled={isDisabled}
                            onClick={handleOnClick}
                        />
                    )}
                </Item>
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
    iconType: PropTypes.oneOf(Object.values(MenuItem.iconTypes)),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isExpanded: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    children: null,
    iconType: null,
    isActive: false,
    isDisabled: false,
    isExpanded: false,
    onClick: null,
};

export default MenuItem;
