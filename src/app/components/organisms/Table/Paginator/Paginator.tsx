import {
    IconType,
    InputType,
    InputVariant,
    Size,
} from '../../../../types';
import {
    InputWrapper,
    PageSizeSelector,
    PageSizeSelectorText,
    Paging,
    PagingButtons,
    PagingText,
    StyledPaginator,
} from './Paginator.sc';
import React, { ReactNode } from 'react';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import Input from '../../../molecules/Input/Input';
import { TableInstance } from 'react-table';

export interface PaginatorTexts {
    page: ReactNode;
    pageGoto: ReactNode;
    pageOf: ReactNode;
    resultsOf: ReactNode;
    rowsPerPage: ReactNode;
    show: ReactNode;
}

export interface PaginatorProps<T extends object> {
    className?: string;
    hasAllPagingButtons?: boolean;
    hasGoToPage?: boolean;
    hasPageSizeSelector?: boolean;
    instance: TableInstance<T>;
    pageSizes?: (number | string)[];
    texts: PaginatorTexts;
    useResultsOfText?: boolean;
}

const pagingResultsText = <T extends object>(
    instance: TableInstance<T>,
    texts: PaginatorTexts,
): string => {
    const { state: { pageIndex, pageSize } } = instance;
    const rowCount = instance.rows.length || 0;
    let result = '';
    let start = -1;
    let end = -1;

    if (pageIndex === 0) {
        start = pageIndex + 1;
        end = pageSize <= rowCount ? pageSize : rowCount;
    }

    if (pageIndex !== 0) {
        start = (pageIndex * pageSize) + 1;
        end = (pageIndex + 1) * pageSize <= rowCount ? (pageIndex + 1) * pageSize : rowCount;
    }

    result = `${start} - ${end}`;

    return `${result} ${texts.resultsOf} ${rowCount}`;
};

const pagingText = <T extends object>(instance: TableInstance<T>, texts: PaginatorTexts): string => {
    const { state: { pageIndex, pageSize } } = instance;
    const pageCount = instance.rows.length / pageSize;

    return `${texts.page} ${pageIndex + 1} ${texts.pageOf} ${pageCount}`;
};

export const Paginator = <T extends object>({
    hasAllPagingButtons = true,
    hasGoToPage = false,
    hasPageSizeSelector = true,
    instance,
    pageSizes = [5, 10, 20],
    texts,
    useResultsOfText = true,
}: PaginatorProps<T>): JSX.Element => {
    const { pageIndex, pageSize } = instance.state;

    return (
        <StyledPaginator>
            {hasPageSizeSelector && (
                <PageSizeSelector>
                    <PageSizeSelectorText>
                        {texts.show}
                    </PageSizeSelectorText>
                    <Dropdown
                        name="DROPDOWN_PAGE_SIZES"
                        onChange={(e): void => {
                            instance.setPageSize(Number(e.target.value));
                        }}
                        value={pageSize}
                    >
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </Dropdown>
                    <PageSizeSelectorText>
                        {texts.rowsPerPage && texts.rowsPerPage}
                    </PageSizeSelectorText>
                </PageSizeSelector>
            )}
            {hasGoToPage && (
                <InputWrapper hasPageSizeSelector={hasPageSizeSelector}>
                    <Input
                        label={texts.pageGoto}
                        name="INPUT_PAGE_INDEX"
                        onChange={(event): void => {
                            const page = event.target.value ? Number(event.target.value) - 1 : 0;
                            instance.gotoPage(page);
                        }}
                        type={InputType.NUMBER}
                        value={(pageIndex + 1).toString()}
                        variant={InputVariant.COMPACT}
                    />
                </InputWrapper>
            )}
            <Paging>
                <PagingText>
                    {useResultsOfText ? pagingResultsText(instance, texts) : pagingText(instance, texts)}
                </PagingText>
                <PagingButtons>
                    {hasAllPagingButtons && (
                        <ButtonIcon
                            iconType={IconType.CHEVRONFIRST}
                            isDisabled={!instance.canPreviousPage}
                            onClick={(): void => {
                                instance.gotoPage(0);
                            }}
                            size={Size.XLARGE}
                        />
                    )}
                    <ButtonIcon
                        iconType={IconType.CHEVRONLEFT}
                        isDisabled={!instance.canPreviousPage}
                        onClick={(): void => {
                            instance.previousPage();
                        }}
                        size={Size.XLARGE}
                    />
                    <ButtonIcon
                        iconType={IconType.CHEVRONRIGHT}
                        isDisabled={!instance.canNextPage}
                        onClick={(): void => {
                            instance.nextPage();
                        }}
                        size={Size.XLARGE}
                    />
                    {hasAllPagingButtons && (
                        <ButtonIcon
                            iconType={IconType.CHEVRONLAST}
                            isDisabled={!instance.canNextPage}
                            onClick={(): void => {
                                instance.gotoPage(instance.pageCount - 1);
                            }}
                            size={Size.XLARGE}
                        />
                    )}
                </PagingButtons>
            </Paging>
        </StyledPaginator>
    );
};

export default Paginator;
