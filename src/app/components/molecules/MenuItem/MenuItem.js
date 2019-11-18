import { Divider, ItemWrapper, StyledMenuItem } from './MenuItem.sc';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const MenuItem = ({
    hasDivider,
    iconType,
    isDisabled,
    isExpanded,
    isParentElement,
    isSelected,
    onClick,
    title,
}) => (
    <StyledMenuItem
        isDisabled={isDisabled}
        isParentElement={isParentElement}
        isSelected={!isParentElement && isSelected}
        onClick={onClick}
    >
        {(isParentElement || isExpanded) && (
            <>
                <ItemWrapper isParentElement={isParentElement}>
                    <TextWithOptionalIcon
                        iconType={iconType && TextWithOptionalIcon.iconTypes[iconType]}
                        isCapitalized={false}
                    >
                        {title}
                    </TextWithOptionalIcon>
                    {isParentElement && (
                        <ButtonIcon
                            iconType={isExpanded ? Icon.types.CHEVRONUP : Icon.types.CHEVRONDOWN}
                            isDisabled={isDisabled}
                            onClick={onClick}
                        />
                    )}
                </ItemWrapper>
                {hasDivider && !isExpanded && (
                    <Divider />
                )}
            </>
        )}
    </StyledMenuItem>
);

MenuItem.propTypes = {
    hasDivider: PropTypes.bool,
    iconType: PropTypes.string,
    isDisabled: PropTypes.bool,
    isExpanded: PropTypes.bool,
    isParentElement: PropTypes.bool,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
};

MenuItem.defaultProps = {
    hasDivider: false,
    iconType: null,
    isDisabled: false,
    isExpanded: false,
    isParentElement: false,
    onClick: null,
};

export default MenuItem;
