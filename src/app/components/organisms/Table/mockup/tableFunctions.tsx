import { ButtonSize, ButtonVariant, IconType } from '../../../../types';
import React, { SyntheticEvent } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import { TableState } from 'react-table';

export const createLocalizedTableTexts = (
    language = 'nl'
): {
    sortByTooltip: string;
} => {
    const localizedTexts = {
        sortByTooltip: language === 'en' ? 'Sort by' : 'Sorteren op',
    };

    return localizedTexts;
};

export const createLocalizedPagingTexts = (
    language = 'nl'
): {
    page: string;
    pageGoto: string;
    pageOf: string;
    resultsOf: string;
    rowsPerPage: string;
    show: string;
} => {
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

export const getTableCell = (cell: unknown, row: unknown, event: SyntheticEvent): unknown => {
    // eslint-disable-next-line no-console
    console.log('Clicked:', cell, row, event);

    return cell;
};

// eslint-disable-next-line @typescript-eslint/ban-types
export const getTableRow = <T extends object>(event: SyntheticEvent, row: unknown, tableState: TableState<T>): void => {
    // eslint-disable-next-line no-console
    console.log('Clicked row:', row);
    // eslint-disable-next-line no-console
    console.log('Event:', event);
    // eslint-disable-next-line no-console
    console.log('Instance state:', tableState);
};

export const getTableFooter = (event: SyntheticEvent): void => {
    // eslint-disable-next-line no-console
    console.log('Footer:', event);
};

export const renderButton = (index: number, isInverted = false): JSX.Element => (
    <Button
        iconType={IconType.SELECT}
        isInverted={isInverted}
        onClick={(event): void => {
            event.stopPropagation();
            action(`On click => ${index}`);
        }}
        size={ButtonSize.SMALL}
        variant={ButtonVariant.TEXT_ONLY}
    >
        {`Button ${index}`}
    </Button>
);
