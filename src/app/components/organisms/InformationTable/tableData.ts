import { InformationTableData } from './InformationTable';

const tableData = (): InformationTableData[] => {
    const result: InformationTableData[] = [];

    result.push({
        isDisabled: false,
        label: 'Date',
        value: '2012-10-01',
    });

    result.push({
        isDisabled: false,
        label: 'Start time',
        value: '12:00',
    });

    result.push({
        isDisabled: false,
        label: 'End time',
        value: '24:00',
    });

    result.push({
        isDisabled: false,
        label: 'Color',
        value: 'Orange',
    });

    result.push({
        isDisabled: false,
        label: 'Fruit',
        value: 'Orange',
    });

    result.push({
        isDisabled: false,
        label: 'Number',
        value: '10',
    });

    return result;
};

export default tableData;
