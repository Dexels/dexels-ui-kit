import {
    DisplayListButton,
    Item,
    SelectionList,
    StyledGenericDropdown,
} from './GenericDropdown.sc';
import React, { useState } from 'react';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import { IconWrapper } from '../TextWithOptionalIcon/TextWithOptionalIcon.sc';
import PropTypes from 'prop-types';

const GenericDropdown = ({
    elevation,
    iconSize,
    isDisabled,
    items,
}) => {
    const [isListCollapsed, setListCollapsed] = useState(false);

    return (
        <StyledGenericDropdown
            elevation={elevation}
            isDisabled={isDisabled}
            isListCollapsed={isListCollapsed}
            onClick={() => {
                setListCollapsed(!isListCollapsed);
            }}
        >
            <DisplayListButton isDisabled={isDisabled} isListCollapsed={isListCollapsed}>
                <IconWrapper iconSize={iconSize}>
                    <Icon type={isListCollapsed ? Icon.types.DROP_DOWN : Icon.types.DROP_UP} />
                </IconWrapper>
            </DisplayListButton>
            <SelectionList
                isDisabled={isDisabled}
                onChange={() => {
                    setListCollapsed(!isListCollapsed);
                }}
            >
                {items.length > 0 && items.map((item) => (
                    <Item key={item}>
                        {`${item}`}
                    </Item>
                ))}
            </SelectionList>
        </StyledGenericDropdown>
    );
};

GenericDropdown.elevations = Card.elevations;
GenericDropdown.iconTypes = Icon.types;

GenericDropdown.propTypes = {
    elevation: PropTypes.oneOf(Object.values(GenericDropdown.elevations)),
    iconSize: PropTypes.string,
    isDisabled: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

GenericDropdown.defaultProps = {
    elevation: GenericDropdown.elevations.LEVEL_0,
    iconSize: '24px',
    isDisabled: false,
};

export default GenericDropdown;
