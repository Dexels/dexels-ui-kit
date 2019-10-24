import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Paginator from './Paginator';
import React from 'react';

export default { title: 'molecules/Paginator' };

export const Configurable = () => (
    <Paginator
        currentPage={1}
        hasGoToPage={boolean('Has goto page', Paginator.defaultProps.hasGoToPage)}
        onFirstPage={action('On first page')}
        onGotoPage={action('On goto page')}
        onLastPage={action('On last page')}
        onNextPage={action('On next page')}
        onPreviousPage={action('On previous page')}
        totalPages={5}
    />
);
