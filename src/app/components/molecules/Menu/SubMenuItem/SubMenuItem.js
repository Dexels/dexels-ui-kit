import Divider from '../Divider/Divider';
import ItemWrapper from '../ItemWrapper/ItemWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import StyledSubMenuItem from './SubMenuItem.sc';
import TextWithOptionalIcon from '../../TextWithOptionalIcon/TextWithOptionalIcon';

const SubMenuItem = ({
    iconType,
    isDisabled,
    isDividerSet,
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
            {isDividerSet && (
                <Divider />
            )}
        </>
    </StyledSubMenuItem>
);

SubMenuItem.propTypes = {
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
    isDisabled: PropTypes.bool,
    isDividerSet: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
};

SubMenuItem.defaultProps = {
    iconType: null,
    isDisabled: false,
    isDividerSet: false,
    isSelected: false,
    onClick: null,
};

export default SubMenuItem;
