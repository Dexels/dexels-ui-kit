import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import React from 'react';

export const createLocalizedTableTexts = (language = 'nl') => {
    const localizedTexts = {
        toggleSortTooltip: language === 'en' ? 'Sort by' : 'Sorteer op',
    };

    return localizedTexts;
};

export const createLocalizedPagingTexts = (language = 'nl') => {
    const localizedTexts = {
        page: language === 'en' ? 'Page' : 'Pagina',
        pageGoto: language === 'en' ? 'Go to page' : 'Ga naar pagina',
        pageOf: language === 'en' ? 'Of' : 'Van',
        resultsOf: language === 'en' ? 'Results of' : 'Resultaten van de',
        rowsPerPage: language === 'en' ? 'Rows per page' : 'Rijen per pagina',
        show: language === 'en' ? 'Show' : 'Toon',
    };

    return localizedTexts;
};

export const getTableCell = (event, cell) => {
    // console.log('************************* cell event', event);
    // console.log('************************* cell value', cell);
    alert(`Clicked on cell: ${cell}`);

    return cell;
};

export const getTableRow = (event, row) => {
    // console.log('************************* row event', event);
    // console.log('************************* row value', row);
    alert(`Clicked on row: ${row}`);

    return row;
};

export const renderButton = (row) => (
    <Button
        iconType={Button.iconTypes.SELECT}
        onClick={(event) => {
            event.stopPropagation();
            action(`On click => ${row.cell.row.index}`);
        }}
        size={Button.sizes.SMALL}
        variant={Button.variants.TEXT_ONLY}
    >
        {`BUTTON ${row.cell.row.index}`}
    </Button>
);
