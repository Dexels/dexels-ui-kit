import {
    Paging,
    PagingButtons,
    PagingText,
    StyledPaginator,
} from './Paginator.sc';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import Input from '../../../molecules/Input/Input';
import PropTypes from 'prop-types';
import React from 'react';

const pagingResultsText = (pageIndex, pageSize, rowCount, localizedTexts) => {
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

    result = start.toString().concat(' - ').concat(end.toString());

    return result.concat(' ').concat(localizedTexts.resultsOf.toLowerCase()).concat(' ').concat(rowCount.toString());
};

const pagingText = (pageIndex, pageCount, localizedTexts) => (
    ''.concat(localizedTexts.page)
        .concat(' ')
        .concat(pageIndex + 1)
        .concat(' ')
        .concat(localizedTexts.pageOf.toLowerCase())
        .concat(' ')
        .concat(pageCount)
);

const Paginator = ({
    hasAllPagingButtons,
    hasGoToPage,
    hasPageSizeSelector,
    useResultsOfText,
    instance,
    localizedTexts,
    pageSizes,
}) => (
    <>
        {/* {console.log('texts', localizedTexts)} */}
        {/* {console.log('************* instance in paginator', instance)} */}

        <StyledPaginator>
            {hasGoToPage
            && (
                <Input
                    label={localizedTexts.pageGoto}
                    name="INPUT_PAGE_INDEX"
                    onChange={(event) => {
                        const page = event.target.value ? Number(event.target.value) - 1 : 0;
                        instance.gotoPage(page);
                    }}
                    type={Input.types.NUMBER}
                    value={(instance.pageIndex + 1).toString()}
                    variant={Input.variants.COMPACT}
                />
            )}
            {hasPageSizeSelector
            && (
                <Dropdown
                    name="DROPDOWN_PAGE_SIZES"
                    onChange={(e) => {
                        instance.setPageSize(Number(e.target.value));
                    }}
                    value={instance.pageSize.toString()}
                >
                    {pageSizes.map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {localizedTexts.pageShow.concat(' ').concat(pageSize.toString())}
                        </option>
                    ))}
                </Dropdown>
            )}
            <Paging>
                <PagingText>
                    {useResultsOfText
                    && pagingResultsText(instance.pageIndex, instance.pageSize, instance.rows.length, localizedTexts)}
                    {!useResultsOfText && pagingText(instance.pageIndex, instance.pageCount, localizedTexts)}
                </PagingText>
                <PagingButtons>
                    {hasAllPagingButtons
                    && (
                        <ButtonIcon
                            iconType={ButtonIcon.types.CHEVRONLEFT}
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
                            iconType={ButtonIcon.types.CHEVRONRIGHT}
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

Paginator.propTypes = {
    hasAllPagingButtons: PropTypes.bool.isRequired,
    hasGoToPage: PropTypes.bool.isRequired,
    hasPageSizeSelector: PropTypes.bool.isRequired,
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    localizedTexts: PropTypes.shape({
        page: PropTypes.string,
        pageGoto: PropTypes.string,
        pageOf: PropTypes.string,
        pageShow: PropTypes.string,
        resultsOf: PropTypes.string,
    }).isRequired,
    pageSizes: PropTypes.arrayOf(PropTypes.number).isRequired,
    useResultsOfText: PropTypes.bool.isRequired,
};

export default Paginator;
