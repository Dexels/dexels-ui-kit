import setCentered from '../../../../styles/mixins/setCentered';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

export const StyledDateRangePicker = styled.div`
    .DateRangePickerInput {
        display: flex;
        flex-wrap: nowrap;
    }

    .DateInput {
        flex: 1 1 auto;
    }

    .DateRangePickerInput_arrow {
        position: relative;
        flex: 0 0 auto;
        width: 20px;
        text-align: center;
        color: ${({ theme }) => theme.colorText.primary};

        &::after {
            ${setCentered()}
            display: block;
            position: absolute;
            content: '-';
        }

        svg {
            display: none;
        }
    }

    .DateRangePickerInput__disabled {
        .DateRangePickerInput_arrow {
            color: ${({ theme }) => theme.colorDisabled};
        }
    }

    .CalendarDay__default.CalendarDay__selected_span {
        background-color: ${({ theme }) => theme.colorTertiary};
        color: ${({ theme }) => theme.colorTextContrast.primary};
    }
`;

StyledDateRangePicker.propTypes = {
    theme: themePropTypes,
};

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
