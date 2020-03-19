import { setCentered } from '../../../../styles/mixins/setCentered';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

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
        color: ${({ theme }): string => theme.colorText.primary};

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
            color: ${({ theme }): string => theme.colorDisabled};
        }
    }

    .CalendarDay__default.CalendarDay__selected_span {
        background-color: ${({ theme }): string => theme.colorTertiary};
        color: ${({ theme }): string => theme.colorTextContrast.primary};
    }
`;

StyledDateRangePicker.defaultProps = {
    theme: themeBasic,
};

export default StyledDateRangePicker;
