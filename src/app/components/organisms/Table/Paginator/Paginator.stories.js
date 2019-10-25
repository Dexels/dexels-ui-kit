import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Paginator from './Paginator';
import { PAGINATOR_PAGE_SIZES } from './Paginator.consts';
import React from 'react';

export default { title: 'organisms/Table/Paginator' };

export const Configurable = () => (
    <Paginator
        currentPage={1}
        hasAllPagingButtons={boolean('Has all paging buttons', Paginator.defaultProps.hasAllPagingButtons)}
        hasGoToPage={boolean('Has goto page element', Paginator.defaultProps.hasGoToPage)}
        onFirstPage={action('On first page')}
        onGoToPage={action('On goto page')}
        onLastPage={action('On last page')}
        onNextPage={action('On next page')}
        onPreviousPage={action('On previous page')}
        pageCount={5}
        pageSizes={PAGINATOR_PAGE_SIZES}
    />
);
