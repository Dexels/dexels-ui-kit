import { ButtonWrapper, StyledToolbar } from './Toolbar.sc';
import Button from '../../molecules/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Toolbar = ({
    children,
    isInverted,
}) => (
    <StyledToolbar isInverted={isInverted}>
        {React.Children.map(children, (child) => {
            if (child.type === Button) {
                return (
                    <ButtonWrapper key={child.key}>
                        {child}
                    </ButtonWrapper>
                );
            }

            return child;
        })}
    </StyledToolbar>
);

Toolbar.propTypes = {
    children: PropTypes.node.isRequired,
    isInverted: PropTypes.bool,
};

Toolbar.defaultProps = {
    isInverted: false,
};

export default Toolbar;
