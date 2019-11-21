import { Divider, ItemWrapper, StyledMenuItem } from './MenuItem.sc';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const MenuItem = ({
    hasChildrenItems,
    hasDivider,
    iconType,
    isDisabled,
    isVisible,
    isParentItem,
    isSelected,
    onClick,
    title,
}) => (
    <StyledMenuItem
        hasChildrenItems={hasChildrenItems}
        isDisabled={isDisabled}
        isParentItem={isParentItem}
        isSelected={isSelected}
        onClick={onClick}
    >
        {(isParentItem || isVisible) && (
            <>
                <ItemWrapper hasChildrenItems={hasChildrenItems} isParentItem={isParentItem}>
                    <TextWithOptionalIcon
                        iconType={iconType}
                        isCapitalized={false}
                    >
                        {title}
                    </TextWithOptionalIcon>
                    {hasChildrenItems && (
                        <ButtonIcon
                            iconType={isVisible ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN}
                            isDisabled={isDisabled}
                            onClick={onClick}
                        />
                    )}
                </ItemWrapper>
                {hasDivider && !isVisible && (
                    <Divider />
                )}
            </>
        )}
    </StyledMenuItem>
);

MenuItem.propTypes = {
    hasChildrenItems: PropTypes.bool,
    hasDivider: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
    isDisabled: PropTypes.bool,
    isParentItem: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    isVisible: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    hasChildrenItems: false,
    hasDivider: false,
    iconType: null,
    isDisabled: false,
    isParentItem: false,
    isVisible: false,
    onClick: null,
};

export default MenuItem;
