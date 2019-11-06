import {
    DropdownTextWrapper,
    DropdownWrapper,
    InputWrapper,
    Paging,
    PagingButtons,
    PagingText,
    StyledPaginator,
} from './Paginator.sc';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import Input from '../../../molecules/Input/Input';
import { PAGINATOR_PAGE_SIZES } from './Paginator.consts';
import PropTypes from 'prop-types';
import React from 'react';

const pagingResultsText = (pageIndex, pageSize, rowCount, texts) => {
    let result = '';
    let start = -1;
    let end = -1;

    if (pageIndex === 0) {
        start = (pageIndex + 1);
        end = pageSize <= rowCount ? pageSize : rowCount;
    }

    if (pageIndex !== 0) {
        start = ((pageIndex * pageSize) + 1);
        end = ((pageIndex + 1) * pageSize) <= rowCount ? ((pageIndex + 1) * pageSize) : rowCount;
    }

    result = `${start.toString()} - ${end.toString()}`;

    return `${result} ${texts.resultsOf.toLowerCase()} ${rowCount.toString()}`;
};

const pagingText = (pageIndex, pageCount, texts) => (
    `${texts.page} ${pageIndex + 1} ${texts.pageOf.toLowerCase()} ${pageCount}`
);

const Paginator = ({
    hasAllPagingButtons,
    hasGoToPage,
    hasPageSizeSelector,
    instance,
    pageSizes,
    texts,
    useResultsOfText,
}) => (
    <>
        {/* {console.log('texts', texts)} */}
        {/* {console.log('************* instance in paginator', instance)} */}

        <StyledPaginator>
            {hasPageSizeSelector && (
                <DropdownWrapper>
                    <DropdownTextWrapper position={'START'}>
                        {texts.show}
                    </DropdownTextWrapper>
                    <Dropdown
                        name="DROPDOWN_PAGE_SIZES"
                        onChange={(e) => {
                            instance.setPageSize(Number(e.target.value));
                        }}
                        value={instance.pageSize.toString()}
                    >
                        {pageSizes.map((pageSize) => (
                            <option key={pageSize} value={pageSize}>
                                {pageSize.toString()}
                            </option>
                        ))}
                    </Dropdown>
                    <DropdownTextWrapper position={'END'}>
                        {texts.rowsPerPage && texts.rowsPerPage.toLowerCase()}
                    </DropdownTextWrapper>
                </DropdownWrapper>
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
                        type={Input.types.NUMBER}
                        value={(instance.pageIndex + 1).toString()}
                        variant={Input.variants.COMPACT}
                    />
                </InputWrapper>
            )}
            <Paging>
                <PagingText>
                    {useResultsOfText
                    && pagingResultsText(instance.pageIndex, instance.pageSize, instance.rows.length, texts)}
                    {!useResultsOfText && pagingText(instance.pageIndex, instance.pageCount, texts)}
                </PagingText>
                <PagingButtons>
                    {hasAllPagingButtons
                    && (
                        <ButtonIcon
                            iconType={ButtonIcon.types.CHEVRONFIRST}
                            isDisabled={!instance.canPreviousPage}
                            onClick={() => instance.gotoPage(0)}
                            size={ButtonIcon.sizes.XLARGE}
                        />
                    )}
                    <ButtonIcon
                        iconType={ButtonIcon.types.CHEVRONLEFT}
                        isDisabled={!instance.canPreviousPage}
                        onClick={() => instance.previousPage()}
                        size={ButtonIcon.sizes.XLARGE}
                    />
                    <ButtonIcon
                        iconType={ButtonIcon.types.CHEVRONRIGHT}
                        isDisabled={!instance.canNextPage}
                        onClick={() => instance.nextPage()}
                        size={ButtonIcon.sizes.XLARGE}
                    />
                    {hasAllPagingButtons
                    && (
                        <ButtonIcon
                            iconType={ButtonIcon.types.CHEVRONLAST}
                            isDisabled={!instance.canNextPage}
                            onClick={() => instance.gotoPage(instance.pageCount - 1)}
                            size={ButtonIcon.sizes.XLARGE}
                        />
                    )}
                </PagingButtons>
            </Paging>
        </StyledPaginator>
    </>
);

Paginator.pageSizes = PAGINATOR_PAGE_SIZES;

Paginator.propTypes = {
    hasAllPagingButtons: PropTypes.bool,
    hasGoToPage: PropTypes.bool,
    hasPageSizeSelector: PropTypes.bool,
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.number),
    texts: PropTypes.shape({
        page: PropTypes.string,
        pageGoto: PropTypes.string,
        pageOf: PropTypes.string,
        resultsOf: PropTypes.string,
        rowsPerPage: PropTypes.string,
        show: PropTypes.string,
    }),
    useResultsOfText: PropTypes.bool,
};

Paginator.defaultProps = {
    hasAllPagingButtons: true,
    hasGoToPage: false,
    hasPageSizeSelector: true,
    pageSizes: Paginator.pageSizes,
    texts: {
        page: 'Page',
        pageGoto: 'Go to page',
        pageOf: 'Of',
        resultsOf: 'Results of',
        rowsPerPage: 'Rows per page',
        show: 'Show',
    },
    useResultsOfText: true,
};

export default Paginator;
