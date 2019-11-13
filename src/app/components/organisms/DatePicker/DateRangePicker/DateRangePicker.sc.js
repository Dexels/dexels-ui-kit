import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import setCentered from '../../../../styles/mixins/setCentered';
import styled from 'styled-components';

export const StyledDateRangePicker = styled.div`
    .DateRangePickerInput {
        display: flex;
        flex-wrap: nowrap;
        padding: 0 48px 0 ${({ theme }) => theme.spacing(1.5)};
    }

    .DateInput {
        flex: 1 1 auto;
    }

    .DateRangePickerInput_arrow {
        position: relative;
        flex: 0 0 auto;
        width: 20px;
        text-align: center;
        color: ${({ theme }) => theme.colorHeaderText.primary};

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
        color: ${({ theme }) => theme.colorContrastText.primary};
    }
`;

StyledDateRangePicker.propTypes = {
    theme: themePropTypes,
};

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
