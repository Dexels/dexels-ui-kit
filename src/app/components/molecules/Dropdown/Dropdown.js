import {
    DisplayListButton,
    Option,
    Select,
    StyledDropdown,
} from './Dropdown.sc';
import React, { useEffect, useRef, useState } from 'react';
import Card from '../../atoms/Card/Card';
import Icon from '../../atoms/Icon/Icon';
import { IconWrapper } from '../TextWithOptionalIcon/TextWithOptionalIcon.sc';
import PropTypes from 'prop-types';

const Dropdown = ({
    elevation,
    iconSize,
    isDisabled,
    items,
}) => {
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

    return (
        <StyledDropdown
            elevation={elevation}
            isDisabled={isDisabled}
            isListCollapsed={isListCollapsed}
            onClick={() => {
                setListCollapsed(!isListCollapsed);
            }}
            ref={wrapperRef}
        >
            <DisplayListButton isDisabled={isDisabled} isListCollapsed={isListCollapsed}>
                <IconWrapper iconSize={iconSize}>
                    <Icon type={isListCollapsed ? Icon.types.DROP_DOWN : Icon.types.DROP_UP} />
                </IconWrapper>
            </DisplayListButton>
            <Select
                isDisabled={isDisabled}
                isListCollapsed={isListCollapsed}
                onChange={() => {
                    setListCollapsed(!isListCollapsed);
                }}
            >
                {items.length > 0 && items.map((item) => (
                    <Option key={item}>
                        {item}
                    </Option>
                ))}
            </Select>
        </StyledDropdown>
    );
};

Dropdown.elevations = Card.elevations;
Dropdown.iconTypes = Icon.types;

Dropdown.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Dropdown.elevations)),
    iconSize: PropTypes.string,
    isDisabled: PropTypes.bool,
    items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Dropdown.defaultProps = {
    elevation: Dropdown.elevations.LEVEL_0,
    iconSize: '24px',
    isDisabled: false,
};

export default Dropdown;
