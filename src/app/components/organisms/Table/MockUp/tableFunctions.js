import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import React from 'react';

export const createLocalizedTableTexts = (language = 'nl') => {
    const localizedTexts = {
        paging: {
            page: language === 'en' ? 'Page' : 'Pagina',
            pageGoto: language === 'en' ? 'Go to page' : 'Ga naar pagina',
            pageOf: language === 'en' ? 'Of' : 'Van',
            pageShow: language === 'en' ? 'Show' : 'Toon',
            resultsOf: language === 'en' ? 'Results of' : 'Resultaten van de',
        },
        toggleSortTooltip: language === 'en' ? 'Sort by' : 'Sorteer op',
    };

    return localizedTexts;
};

export const getTableCell = (event, cell) => {
    // console.log('************************* cell event', event);
    // console.log('************************* cell value', cell);

    // @TODO: implement some logic for this
    if (event) {
        return cell;
    }

    return cell;
};

export const getTableRow = (event, row) => {
    // console.log('************************* row event', event);
    // console.log('************************* row value', row);

    // @TODO: implement some logic for this
    if (event) {
        return row;
    }

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
