import {
    DisplayList,
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
    handleClick,
    iconSize,
    isDisabled,
    items,
}) => {
    const [listOpen, setListOpen] = useState(false);

    return (
        <StyledGenericDropdown
            elevation={elevation}
            isDisabled={isDisabled}
            listOpen={listOpen}
            onClick={() => {
                setListOpen(!listOpen);
            }}
        >
            <DisplayList
                isDisabled={isDisabled}
                listOpen={listOpen}
            >
                <IconWrapper iconSize={iconSize}>
                    <Icon type={listOpen ? Icon.types.DROP_DOWN : Icon.types.DROP_UP} />
                </IconWrapper>
            </DisplayList>
            <SelectionList
                isDisabled={isDisabled}
            >
                {items.length > 0 && items.map((item) => (
                    <Item
                        key={item.id}
                        onClick={() => {
                            handleClick(item);
                        }}
                    >
                        {`${item.value}`}
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
    handleClick: PropTypes.func.isRequired,
    iconSize: PropTypes.string,
    isDisabled: PropTypes.bool,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string,
        }),
    ),
};

GenericDropdown.defaultProps = {
    elevation: GenericDropdown.elevations.LEVEL_0,
    iconSize: '24px',
    isDisabled: false,
    items: null,
};

export default GenericDropdown;
