import React, { useState } from 'react';
import Item from './Item/Item';
import PropTypes from 'prop-types';
import { StyledMenu } from './Menu.sc';

const Menu = ({ defaultOpenItem, items }) => {
    const [openItem, setOpenItem] = useState(defaultOpenItem);

    const handleSetOpenItem = (text) => {
        setOpenItem(openItem === text ? '' : text);
    };

    return (
        <StyledMenu>
            {items.map(({
                children,
                iconType,
                isDisabled,
                path,
                text,
            }) => {
                if (children.length > 0) {
                    const isOpen = openItem === text;

                    return (
                        <React.Fragment key={text}>
                            <Item
                                hasChildren
                                iconType={iconType}
                                isDisabled={isDisabled}
                                isOpen={isOpen}
                                isParent
                                key={text}
                                onClick={() => {
                                    handleSetOpenItem(text);
                                }}
                            >
                                {text}
                            </Item>
                            {isOpen && children.map((child) => (
                                <Item isDisabled={child.isDisabled} key={child.text} path={child.path}>
                                    {child.text}
                                </Item>
                            ))}
                        </React.Fragment>
                    );
                }

                return (
                    <Item
                        iconType={iconType}
                        isDisabled={isDisabled}
                        isParent
                        key={text}
                        onClick={() => {
                            handleSetOpenItem(text);
                        }}
                        path={path}
                    >
                        {text}
                    </Item>
                );
            })}
        </StyledMenu>
    );
};

Menu.iconTypes = Item.iconTypes;

Menu.propTypes = {
    defaultOpenItem: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.arrayOf(PropTypes.shape({
            isDisabled: PropTypes.bool.isRequired,
            path: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
        })),
        iconType: PropTypes.oneOf(Object.values(Menu.iconTypes)).isRequired,
        isDisabled: PropTypes.bool.isRequired,
        path: PropTypes.string,
        text: PropTypes.string.isRequired,
    })).isRequired,
};

Menu.defaultProps = {
    defaultOpenItem: '',
};

export default Menu;
