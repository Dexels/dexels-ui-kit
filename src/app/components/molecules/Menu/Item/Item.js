import PropTypes from 'prop-types';
import React from 'react';
import StyledItem from './Item.sc';

const Item = ({
    children,
    hasChildren,
    isParent,
}) => (
    <StyledItem hasChildren={hasChildren} isParent={isParent}>
        {children}
    </StyledItem>
);

Item.propTypes = {
    children: PropTypes.node.isRequired,
    hasChildren: PropTypes.bool,
    isParent: PropTypes.bool,
};

Item.defaultProps = {
    hasChildren: false,
    isParent: false,
};

export default Item;
