import React, { useState } from 'react';
import Item from './Item/Item';
import PropTypes from 'prop-types';
import { StyledMenu } from './Menu.sc';

const Menu = ({ className, defaultOpenItem, items }) => {
    const [openItem, setOpenItem] = useState(defaultOpenItem);

    const handleSetOpenItem = (text) => {
        setOpenItem(openItem === text ? '' : text);
    };

    return (
        <StyledMenu className={className}>
            {items.map(({
                children,
                exact,
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
                                onClick={() => {
                                    handleSetOpenItem(text);
                                }}
                            >
                                {text}
                            </Item>
                            {isOpen && children.map((child) => (
                                <Item
                                    exact={child.exact}
                                    isDisabled={child.isDisabled}
                                    key={child.path}
                                    path={child.path}
                                >
                                    {child.text}
                                </Item>
                            ))}
                        </React.Fragment>
                    );
                }

                return (
                    <Item
                        exact={exact}
                        iconType={iconType}
                        isDisabled={isDisabled}
                        isParent
                        key={path}
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
    className: PropTypes.string,
    defaultOpenItem: PropTypes.node,
    items: PropTypes.arrayOf(PropTypes.shape({
        children: PropTypes.arrayOf(PropTypes.shape({
            exact: PropTypes.bool,
            isDisabled: PropTypes.bool,
            path: PropTypes.string.isRequired,
            text: PropTypes.node.isRequired,
        })),
        exact: PropTypes.bool,
        iconType: PropTypes.oneOf(Object.values(Menu.iconTypes)).isRequired,
        isDisabled: PropTypes.bool,
        path: PropTypes.string.isRequired,
        text: PropTypes.node.isRequired,
    })).isRequired,
};

Menu.defaultProps = {
    className: '',
    defaultOpenItem: null,
};

export default Menu;
