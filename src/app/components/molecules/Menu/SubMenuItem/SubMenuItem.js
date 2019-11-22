import Divider from '../Divider/Divider';
import ItemWrapper from '../ItemWrapper/ItemWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import StyledSubMenuItem from './SubMenuItem.sc';
import TextWithOptionalIcon from '../../TextWithOptionalIcon/TextWithOptionalIcon';

const SubMenuItem = ({
    hasDivider,
    iconType,
    isDisabled,
    isSelected,
    onClick,
    title,
}) => (
    <StyledSubMenuItem
        isDisabled={isDisabled}
        isSelected={isSelected}
        onClick={isDisabled ? null : onClick}
    >
        <>
            <ItemWrapper>
                <TextWithOptionalIcon iconType={iconType} isCapitalized={false}>
                    {title}
                </TextWithOptionalIcon>
            </ItemWrapper>
            {hasDivider && (
                <Divider />
            )}
        </>
    </StyledSubMenuItem>
);

SubMenuItem.propTypes = {
    hasDivider: PropTypes.bool,
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
    isDisabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
};

SubMenuItem.defaultProps = {
    hasDivider: false,
    iconType: null,
    isDisabled: false,
    isSelected: false,
    onClick: null,
};

export default SubMenuItem;
