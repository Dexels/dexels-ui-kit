import PropTypes from 'prop-types';
import React from 'react';
import StyledItem from './Item.sc';

const Item = ({
    children,
    isParent,
}) => (
    <StyledItem isParent={isParent}>
        {children}
    </StyledItem>
);

Item.propTypes = {
    children: PropTypes.node.isRequired,
    isParent: PropTypes.bool,
};

Item.defaultProps = {
    isParent: false,
};

export default Item;
