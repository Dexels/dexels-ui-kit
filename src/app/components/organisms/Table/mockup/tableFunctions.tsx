import { ButtonSize, ButtonVariant, IconType } from '../../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import { CellProps } from 'react-table';
import React from 'react';
import { TableData } from './tableData';

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

export const getTableCell = (cell: any, row: any, event: any = null) => {
    // console.log('************************* cell event', event);
    // console.log('************************* cell value', cell);
    // console.log('************************* row value', row);
    alert(`Clicked on cell/row: ${cell} \n ${row} \n ${event}`);

    return cell;
};

export const getTableRow = (event: any, row: any): any => {
    // console.log('************************* row event', event);
    // console.log('************************* row value', row);
    alert(`Clicked on row: ${row}`);

    return row;
};

export const renderButton = (row: CellProps<TableData>, isInverted = false) => (
    <Button
        iconType={IconType.SELECT}
        isInverted={isInverted}
        onClick={(event) => {
            event.stopPropagation();
            action(`On click => ${row.cell.row.index}`);
        }}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.TEXT_ONLY}
    >
        {`BUTTON ${row.cell.row.index}`}
    </Button>
);
