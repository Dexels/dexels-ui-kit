import Item from '../Item/Item';
import PropTypes from 'prop-types';
import React from 'react';
import StyledSubMenuItem from './SubMenuItem.sc';
import TextWithOptionalIcon from '../../TextWithOptionalIcon/TextWithOptionalIcon';

const SubMenuItem = ({
    iconType,
    isActive,
    isDisabled,
    onClick,
    text,
}) => {
    const handleOnClick = isDisabled ? null : onClick;

    return (
        <StyledSubMenuItem
            isActive={isActive}
            isDisabled={isDisabled}
            onClick={handleOnClick}
        >
            <Item>
                <TextWithOptionalIcon iconType={iconType}>
                    {text}
                </TextWithOptionalIcon>
            </Item>
        </StyledSubMenuItem>
    );
};

SubMenuItem.propTypes = {
    iconType: PropTypes.oneOf(Object.values(TextWithOptionalIcon.iconTypes)),
    isActive: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func,
    text: PropTypes.string.isRequired,
};

SubMenuItem.defaultProps = {
    iconType: null,
    isActive: false,
    isDisabled: false,
    onClick: null,
};

export default SubMenuItem;
