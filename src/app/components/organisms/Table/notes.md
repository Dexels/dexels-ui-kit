# How to use the table component
### TODO: add functionality like table edit, grouping, expanding rows

The current table can handle paging, (multi)sorting and specific cell rendering.<br/>
The latter can be established by using the Cell prop in the column definition.

**Creating table columns example (based on the assumption that the data columns match the accessors)**:
```
export const tableColumns = () => (
    React.useMemo(() => [
        {
            accessor: 'id',
            show: false,
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'First Name',
            accessor: 'firstName',
            // TIP: event can be left out. Default = null
            onClick: (cell, row, event) => getTableCell(cell, row, event),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Last Name',
            accessor: 'lastName',
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Startdate',
            accessor: 'relationStart',
            sortType: (a, b, propName) => customSortByDate(a, b, propName),
        },
        {
            Cell: (row) => renderCell(row),
            Header: 'Info',
            accessor: 'info',
            sortType: 'basic',
        },
        {
            Cell: (row) => renderButton(row),
            Header: 'Action',
            accessor: 'action',
            disableSorting: true,
        },
    ], [])
);
```


**Creating a table instance example**:
```
export const createTable = (
    columns,
    data,
    disableMultiSort = false,
    disableSorting = false,
) => (
    useTable(
        {
            columns,
            data,
            disableMultiSort,
            disableSorting,
            initialState: {
                pageIndex: 0,
                sortBy: [
                    {
                        desc: false,
                        id: 'lastName',
                    },
                    {
                        desc: true,
                        id: 'firstName',
                    },
                ],
            },
        },
        useSortBy,
        usePagination,
    )
);
```
