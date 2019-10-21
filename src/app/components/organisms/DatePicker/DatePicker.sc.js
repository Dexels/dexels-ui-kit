import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledDatePicker = styled.div`
    ${setBoxSizing()};

    .DayPickerNavigation_button {
        outline: none;
    }
`;

export default StyledDatePicker;
