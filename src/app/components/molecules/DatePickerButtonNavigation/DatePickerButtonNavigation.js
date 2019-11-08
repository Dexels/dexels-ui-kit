import ButtonIcon from '../ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledDatePickerButtonNavigation } from './DatePickerButtonNavigation.sc';

const DatePickerButtonNavigation = ({ isNext, isPrev }) => (
    <StyledDatePickerButtonNavigation isNext={isNext} isPrev={isPrev}>
        <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} />
    </StyledDatePickerButtonNavigation>
);

DatePickerButtonNavigation.propTypes = {
    isNext: PropTypes.bool,
    isPrev: PropTypes.bool,
};

DatePickerButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
};

export default DatePickerButtonNavigation;
