import ButtonIcon from '../../ButtonIcon/ButtonIcon';
import Divider from '../Divider/Divider';
import Icon from '../../../atoms/Icon/Icon';
import ItemWrapper from '../ItemWrapper/ItemWrapper';
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
}) => (
    <>
        <StyledMenuItem
            hasChildrenItems={children !== null}
            isDisabled={isDisabled}
            isSelected={isSelected}
            onClick={isDisabled ? null : onClick}
        >
            <>
                <ItemWrapper hasChildrenItems={children !== null} isParentItem>
                    <TextWithOptionalIcon iconType={iconType} isCapitalized={false}>
                        {title}
                    </TextWithOptionalIcon>
                    {children && (
                        <ButtonIcon
                            iconType={isSelected ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN}
                            isDisabled={isDisabled}
                            onClick={isDisabled ? null : onClick}
                        />
                    )}
                </ItemWrapper>
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

MenuItem.propTypes = {
    children: PropTypes.node,
    hasDivider: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
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
