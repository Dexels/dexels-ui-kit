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
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import Input from '../../../molecules/Input/Input';
import React from 'react';

export interface PaginatorTexts {
    page: React.ReactNode;
    pageGoto: React.ReactNode;
    pageOf: React.ReactNode;
    resultsOf: React.ReactNode;
    rowsPerPage: React.ReactNode;
    show: React.ReactNode;
}

export interface PaginatorProps {
    className?: string;
    hasAllPagingButtons?: boolean;
    hasGoToPage?: boolean;
    hasPageSizeSelector?: boolean;
    instance: {
        canNextPage: boolean;
        canPreviousPage: boolean;
        gotoPage: (...args: any[]) => any;
        nextPage: (...args: any[]) => any;
        pageCount: number;
        previousPage: (...args: any[]) => any;
        rows: object[];
        setPageSize: (...args: any[]) => any;
        state: {
            pageIndex: number;
            pageSize: number;
        };
    };
    pageSizes?: (number | string)[];
    texts: PaginatorTexts;
    useResultsOfText?: boolean;
}

const pagingResultsText = (
    instance: any,
    texts: PaginatorTexts,
) => {
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

const pagingText = (instance: any, texts: PaginatorTexts) => {
    const { state: { pageIndex, pageSize } } = instance;
    const pageCount = instance.rows.length / pageSize;

    return `${texts.page} ${pageIndex + 1} ${texts.pageOf} ${pageCount}`;
};

export const Paginator: React.FunctionComponent<PaginatorProps> = ({
    hasAllPagingButtons,
    hasGoToPage,
    hasPageSizeSelector,
    instance,
    pageSizes,
    texts,
    useResultsOfText,
}) => {
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
                        onChange={(e) => {
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
                        onChange={(event) => {
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
                    {useResultsOfText
                        ? pagingResultsText(instance, texts)
                        : pagingText(instance, texts)}
                </PagingText>
                <PagingButtons>
                    {hasAllPagingButtons && (
                        <ButtonIcon
                            iconType={IconType.CHEVRONFIRST}
                            isDisabled={!instance.canPreviousPage}
                            onClick={() => instance.gotoPage(0)}
                            size={Size.XLARGE}
                        />
                    )}
                    <ButtonIcon
                        iconType={IconType.CHEVRONLEFT}
                        isDisabled={!instance.canPreviousPage}
                        onClick={() => instance.previousPage()}
                        size={Size.XLARGE}
                    />
                    <ButtonIcon
                        iconType={IconType.CHEVRONRIGHT}
                        isDisabled={!instance.canNextPage}
                        onClick={() => instance.nextPage()}
                        size={Size.XLARGE}
                    />
                    {hasAllPagingButtons && (
                        <ButtonIcon
                            iconType={IconType.CHEVRONLAST}
                            isDisabled={!instance.canNextPage}
                            onClick={() => instance.gotoPage(instance.pageCount - 1)}
                            size={Size.XLARGE}
                        />
                    )}
                </PagingButtons>
            </Paging>
        </StyledPaginator>
    );
};

Paginator.defaultProps = {
    hasAllPagingButtons: true,
    hasGoToPage: false,
    hasPageSizeSelector: true,
    pageSizes: [5, 10, 20],
    useResultsOfText: true,
};

export default Paginator;
