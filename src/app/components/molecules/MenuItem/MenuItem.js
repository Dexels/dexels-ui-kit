import { Divider, ItemWrapper, StyledMenuItem } from './MenuItem.sc';
import ButtonIcon from '../ButtonIcon/ButtonIcon';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const MenuItem = ({
    children,
    hasDivider,
    isDisabled,
    isExpanded,
    isParentElement,
    onClick,
}) => (
    <StyledMenuItem
        hasDivider={hasDivider}
        isDisabled={isDisabled}
        isExpanded={isExpanded}
        isParentElement={isParentElement}
        onClick={onClick}
    >
        {React.Children.map(children, (child) => {
            if (isParentElement || isExpanded) {
                return (
                    <>
                        <ItemWrapper>
                            {child}
                            {isParentElement && (
                                <ButtonIcon
                                    iconType={!isExpanded ? Icon.types.CHEVRONDOWN : Icon.types.CHEVRONUP}
                                    onClick={() => {}}
                                />
                            )}
                        </ItemWrapper>
                        {hasDivider && !isExpanded && (
                            <Divider />
                        )}
                    </>
                );
            }

            return null;
        })}
    </StyledMenuItem>
);

MenuItem.propTypes = {
    children: PropTypes.node.isRequired,
    hasDivider: PropTypes.bool,
    isDisabled: PropTypes.bool,
    isExpanded: PropTypes.bool,
    isParentElement: PropTypes.bool,
    onClick: PropTypes.func,
};

MenuItem.defaultProps = {
    hasDivider: false,
    isDisabled: false,
    isExpanded: false,
    isParentElement: true,
    onClick: null,
};

export default MenuItem;
