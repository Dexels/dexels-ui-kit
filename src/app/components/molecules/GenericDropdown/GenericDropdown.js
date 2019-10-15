import {
    DisplayListButton,
    Option,
    Select,
    StyledGenericDropdown,
} from './GenericDropdown.sc';
import React, { useEffect, useRef, useState } from 'react';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';

const GenericDropdown = ({
    defaultValue,
    elevation,
    iconSize,
    isDisabled,
    items,
    onChange,
}) => {
    const getDefaultValue = () => {
        if (defaultValue) {
            return defaultValue;
        }

        return items[0];
    };

    const [selectedItem, setSelectedItem] = useState(getDefaultValue());
    const [isListCollapsed, setListCollapsed] = useState(false);

    function useOutsideAlerter() {
        function handleClickOutside() {
            setListCollapsed(false);
        }

        useEffect(() => {
            document.addEventListener('mouseout', handleClickOutside);

            return () => {
                document.removeEventListener('mouseout', handleClickOutside);
            };
        });
    }

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef);

    const selectedValue = () => {
        const e = document.getElementById('GENERIC_DROPDOWN');
        const index = e.options[e.selectedIndex].value;
        const value = e.options[e.selectedIndex].text;
        setSelectedItem(value);

        return {
            index,
            value,
        };
    };

    const handleOnChange = (isCollapsed) => {
        setListCollapsed(isCollapsed);
        onChange(selectedValue().value);
    };

    return (
        <StyledGenericDropdown
            elevation={elevation}
            isDisabled={isDisabled}
            isListCollapsed={isListCollapsed}
            onClick={() => {
                setListCollapsed(!isListCollapsed);
            }}
            ref={wrapperRef}
        >
            <DisplayListButton iconSize={iconSize} isDisabled={isDisabled} isListCollapsed={isListCollapsed}>
                <Icon type={isListCollapsed ? Icon.types.DROP_DOWN : Icon.types.DROP_UP} />
            </DisplayListButton>
            <Select
                id="GENERIC_DROPDOWN"
                isDisabled={isDisabled}
                isListCollapsed={isListCollapsed}
                onChange={() => {
                    handleOnChange(!isListCollapsed);
                }}
                value={selectedItem}
            >
                {items.length > 0 && items.map((item) => (
                    <Option
                        key={item}
                        value={item}
                    >
                        {item}
                    </Option>
                ))}
            </Select>
        </StyledGenericDropdown>
    );
};

GenericDropdown.elevations = Card.elevations;
GenericDropdown.iconTypes = Icon.types;

GenericDropdown.propTypes = {
    defaultValue: PropTypes.string,
    elevation: PropTypes.oneOf(Object.values(GenericDropdown.elevations)),
    iconSize: PropTypes.string,
    isDisabled: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
    onChange: PropTypes.func.isRequired,
};

GenericDropdown.defaultProps = {
    defaultValue: null,
    elevation: GenericDropdown.elevations.LEVEL_0,
    iconSize: '24px',
    isDisabled: false,
};

export default GenericDropdown;
