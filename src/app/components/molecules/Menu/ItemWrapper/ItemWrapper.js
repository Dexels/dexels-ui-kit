import PropTypes from 'prop-types';
import React from 'react';
import StyledItemWrapper from './ItemWrapper.sc';

const ItemWrapper = ({
    children,
    hasChildrenItems,
    isParentItem,
}) => (
    <StyledItemWrapper hasChildrenItems={hasChildrenItems} isParentItem={isParentItem}>
        {children}
    </StyledItemWrapper>
);

ItemWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    hasChildrenItems: PropTypes.bool,
    isParentItem: PropTypes.bool,
};

ItemWrapper.defaultProps = {
    hasChildrenItems: false,
    isParentItem: false,
};

export default ItemWrapper;
