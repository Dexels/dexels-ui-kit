import { AmountWrapper, ImageWrapper, StyledContentCell } from './ContentCell.sc';
import { formatDate, formatTime, isValidClockTime, isValidDate } from '../../../../utils/functions/dateFunctions';
import { formatMoneyWithoutSymbol, getCurrencyIcon } from '../../../../utils/functions/financialFunctions';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, ReactNode } from 'react';
import { DEFAULT_LOCALE } from '../../../../../global/constants';
import Icon from '../../../atoms/Icon/Icon';
import { Locale } from '../../../../types';

export interface ContentCellProps {
    hasLineThrough?: boolean;
    hasNegativeAmountColor?: boolean;
    hasTooltip?: boolean;
    isBold?: boolean;
    isCurrency?: boolean;
    isDisabled?: boolean;
    isImage?: boolean;
    isTime?: boolean;
    locale?: Locale;
    textColor?: string;
    textLinesLimit?: number;
    timeFormat?: string;
    value: string | number | Date | Moment | ReactNode | undefined;
}

export const ContentCell: FunctionComponent<ContentCellProps> = ({
    hasNegativeAmountColor = true,
    textLinesLimit = 2,
    hasLineThrough = false,
    hasTooltip = false,
    isCurrency = false,
    isBold = false,
    isDisabled = false,
    isImage = false,
    isTime = false,
    locale = DEFAULT_LOCALE,
    textColor = '',
    timeFormat = 'HH:mm',
    value,
}) => {
    let content = value;

    if (typeof value !== 'number' && moment.isMoment(value)) {
        content = formatDate(value, locale);
    }

    if (isCurrency) {
        content = typeof value === 'number' && (
            <>
                <Icon type={getCurrencyIcon(locale)} />
                <AmountWrapper hasNegativeAmountColor={hasNegativeAmountColor && value < 0}>
                    {formatMoneyWithoutSymbol(value, locale)}
                </AmountWrapper>
            </>
        );
    }

    if (isImage && typeof value === 'string') {
        content = (
            <ImageWrapper>
                <img alt="" src={value} />
            </ImageWrapper>
        );
    }

    if (typeof value === 'string') {
        if (isTime) {
            if (isValidClockTime(value)) {
                content = formatTime(value);
            }

            if (isValidDate(value)) {
                content = formatDate(value, locale, timeFormat);
            }
        } else if (isValidDate(value)) {
            content = formatDate(value, locale);
        }
    }

    return (
        <StyledContentCell
            data-tooltip-component={hasTooltip && typeof content === 'string' ? content : null}
            hasLineThrough={hasLineThrough}
            id="ContentCell"
            isBold={isBold}
            isCurrency={isCurrency}
            isDisabled={isDisabled}
            isImage={isImage}
            textColor={textColor}
            textLinesLimit={textLinesLimit}
        >
            {content}
        </StyledContentCell>
    );
};

export default ContentCell;
