import { getSelectedRowIds } from '../../../components/organisms/Table/utils/tableFunctions';
import { tableData } from '../../../components/organisms/Table/mockup/tableData';

describe('test table functions', () => {
    test('test getSelectedRowIds', () => {
        const data = tableData();

        expect(getSelectedRowIds(data)).toEqual({
            '0': true,
            '101': true,
            '102': true,
        });
    });
});
