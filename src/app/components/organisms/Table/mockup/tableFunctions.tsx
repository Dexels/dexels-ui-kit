import { ButtonSize, ButtonVariant, IconType } from '../../../../types';
import { action } from '@storybook/addon-actions';
import Button from '../../../molecules/Button/Button';
import React from 'react';

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTableCell = (cell: any, row: any, event: any = null): any => {
    // eslint-disable-next-line no-console
    console.log('Clicked:', cell, row, event);

    return cell;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getTableRow = (event: any, row: any): any => {
    // eslint-disable-next-line no-console
    console.log('Clicked row:', row);
    // eslint-disable-next-line no-console
    console.log('Event:', event);

    return row;
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
