import React, { FunctionComponent, useMemo } from 'react';
import InformationTable from './InformationTable';
import { select } from '@storybook/addon-knobs';
import tableData from './tableData';

export default { title: 'organisms/InformationTable' };

export const Configurable: FunctionComponent = () => {
    const data = useMemo(() => tableData(), []);

    return (
        <InformationTable
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={data}
            errors={['Error number 1', 'Error number 2']}
        />
    );
};

export const ConfigurableWithWarnings: FunctionComponent = () => {
    const data = useMemo(() => tableData(), []);

    return (
        <InformationTable
            amountOfColumns={select('Columns', [1, 2, 3], 2)}
            data={data}
            warnings={['Warning number 1', 'Warning number 2']}
        />
    );
};
