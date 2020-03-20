import React, { Fragment, FunctionComponent, useState } from 'react';
import Item from './Item/Item';
import { MenuItems } from './types';
import { StyledMenu } from './Menu.sc';

export interface MenuProps {
    className?: string;
    defaultOpenItemPath?: string;
    items: MenuItems;
}

export const Menu: FunctionComponent<MenuProps> = ({ className, defaultOpenItemPath, items }) => {
    const [openItemPath, setOpenItemPath] = useState(defaultOpenItemPath);

    const handleSetOpenItem = (path: string): void => {
        setOpenItemPath(openItemPath === path ? '' : path);
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
                if (children && children.length > 0) {
                    const isOpen = openItemPath === path;

                    return (
                        <Fragment key={path}>
                            <Item
                                hasChildren
                                iconType={iconType}
                                isDisabled={isDisabled}
                                isOpen={isOpen}
                                isParent
                                onClick={(): void => {
                                    handleSetOpenItem(path);
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
                        </Fragment>
                    );
                }

                return (
                    <Item
                        exact={exact}
                        iconType={iconType}
                        isDisabled={isDisabled}
                        isParent
                        key={path}
                        path={path}
                    >
                        {text}
                    </Item>
                );
            })}
        </StyledMenu>
    );
};

export default Menu;
