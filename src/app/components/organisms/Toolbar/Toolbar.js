import { ButtonWrapper, StyledToolbar } from './Toolbar.sc';
import Button from '../../molecules/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Toolbar = ({ children, isInverted }) => (
    <StyledToolbar isInverted={isInverted}>
        {React.Children.map(children, (child) => {
            if (child.type === Button) {
                return (
                    <ButtonWrapper key={child.key}>
                        {React.cloneElement(child, { isInverted })}
                    </ButtonWrapper>
                );
            }

            return React.cloneElement(child, { isInverted });
        })}
    </StyledToolbar>
);

Toolbar.propTypes = {
    children: PropTypes.node,
    isInverted: PropTypes.bool,
};

Toolbar.defaultProps = {
    children: null,
    isInverted: false,
};

export default Toolbar;
