import { StyledPaginator, StyledPagingButton } from './Paginator.sc';
import PropTypes from 'prop-types';
import React from 'react';

const Paginator = ({
    currentPage,
    hasGoToPage,
    onFirstPage,
    onGotoPage,
    onLastPage,
    onNextPage,
    onPreviousPage,
    totalPages,
}) => (
    <StyledPaginator
        currentPage={currentPage}
        hasGoToPage={hasGoToPage}
        onGotoPage={onGotoPage}
        onLastPage={onLastPage}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
        totalPages={totalPages}
    >
        {onFirstPage
        && <StyledPagingButton iconType={StyledPagingButton.types.CHEVRONLEFT} onClick={onFirstPage} />}
        <StyledPagingButton iconType={StyledPagingButton.types.CHEVRONLEFT} onClick={onPreviousPage} />
        <StyledPagingButton iconType={StyledPagingButton.types.CHEVRONRIGHT} onClick={onNextPage} />
        {onLastPage
        && <StyledPagingButton iconType={StyledPagingButton.types.CHEVRONRIGHT} onClick={onLastPage} />}
    </StyledPaginator>
);

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    hasGoToPage: PropTypes.bool,
    onFirstPage: PropTypes.func.isRequired,
    onGotoPage: PropTypes.func.isRequired,
    onLastPage: PropTypes.func.isRequired,
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired,
    totalPages: PropTypes.number.isRequired,
};

Paginator.defaultProps = {
    hasGoToPage: false,
};

export default Paginator;
