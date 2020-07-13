import { AmountWrapper, ImageWrapper, StyledContentCell } from './ContentCell.sc';
import { formatDate, formatTime, isValidClockTime, isValidDate } from '../../../../utils/functions/dateFunctions';
import React, { FunctionComponent } from 'react';
import { formatMoney } from '../../../../utils/functions/financialFunctions';
import { Locale } from '../../../../types';

export interface ContentCellProps {
    colorNegativeAmount?: string;
    hasContentLimit?: boolean;
    hasLineThrough?: boolean;
    hasTooltip?: boolean;
    isBold?: boolean;
    isCurrency?: boolean;
    isDisabled?: boolean;
    isImage?: boolean;
    locale?: Locale;
    renderDateAsTime?: boolean;
    timeFormat?: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    value: any; // This really can be anything....
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getTooltip = (value: any): string | null => (typeof value === 'string' ? value : null);

export const ContentCell: FunctionComponent<ContentCellProps> = ({
    colorNegativeAmount = 'red',
    hasContentLimit = true,
    hasLineThrough = false,
    hasTooltip = false,
    isCurrency = false,
    isBold = false,
    isDisabled = false,
    isImage = false,
    locale = Locale.NL,
    renderDateAsTime = false,
    timeFormat = 'HH:mm',
    value,
}) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    let content = value;

    if (isCurrency) {
        content = value && (
            <AmountWrapper colorNegativeAmount={colorNegativeAmount} isNegativeCurrency={value && value < 0}>
                {formatMoney(value)}
            </AmountWrapper>
        );
    }

    if (isImage) {
        content = (
            <ImageWrapper>
                <img alt="" src={value as string} />
            </ImageWrapper>
        );
    }

    if (renderDateAsTime) {
        if (isValidClockTime(value)) {
            content = formatTime(value);
        }

        if (isValidDate(value)) {
            content = formatDate(value, locale, timeFormat);
        }
    } else if (isValidDate(value)) {
        content = formatDate(value, locale);
    }

    return (
        <StyledContentCell
            data-tooltip-component={hasTooltip ? getTooltip(content) : null}
            hasContentLimit={hasContentLimit}
            hasLineThrough={hasLineThrough}
            isBold={isBold}
            isCurrency={isCurrency}
            isDisabled={isDisabled}
            isImage={isImage}
        >
            {content}
        </StyledContentCell>
    );
};

export default ContentCell;
