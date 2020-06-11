# How to use the table component
### TODO: add functionality like table edit, grouping, expanding rows

The current table can handle paging, (multi)sorting and specific cell rendering.<br/>
The latter can be established by using the Cell prop in the column definition.

**Creating table columns example (based on the assumption that the data columns match the accessors)**:

```jsx
export const tableColumns = () => (
    useMemo(() => [
        {
            Cell: ({ value }) => renderCell(value),
            Header: 'First name',
            accessor: 'firstName',
            hasCellPadding: false,
            // TIP: event can be left out. Default = null
            onClick: (cell, row, event) => getTableCell(cell, row, event),
        },
        {
            Cell: ({ value }) => renderCell(value),
            Header: 'Last name',
            accessor: 'lastName',
        },
        {
            Cell: ({ value }) => renderCell(value),
            Header: 'Startdate',
            accessor: 'relationStart',
            align: Alignment.RIGHT,
            sortType: (a, b, propName) => customSortByDate(a, b, propName),
        },
        {
            Cell: ({ value }) => renderCell(value),
            Header: 'Info',
            accessor: 'info',
            sortType: 'basic',
        },
        {
            Cell: ({ cell }): ReactNode => renderButton(cell.row.index),
            Header: 'Action',
            accessor: 'id',
            disableSorting: true,
        },
    ], [])
);
```

**Creating a table instance example**:

```jsx
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
