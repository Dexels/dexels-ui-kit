import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledButtonNavigation } from './ButtonNavigation.sc';

const ButtonNavigation = ({ isNext, isPrev }) => (
    <StyledButtonNavigation isNext={isNext} isPrev={isPrev}>
        <ButtonIcon iconType={ButtonIcon.iconTypes.CHEVRONLEFT} />
    </StyledButtonNavigation>
);

ButtonNavigation.propTypes = {
    isNext: PropTypes.bool,
    isPrev: PropTypes.bool,
};

ButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
};

export default ButtonNavigation;
