import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

interface StyledSingleDatePickerProps {
    hasYearSelector: boolean; // @TODO Why is this prop required, its not used?
}

export const StyledSingleDatePicker = styled.div<StyledSingleDatePickerProps>`
    .SingleDatePickerInput {
        display: block;
    }
`;

StyledSingleDatePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledSingleDatePicker;
