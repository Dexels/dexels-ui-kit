type OptionBase = { [key: string]: unknown };

export interface Option extends OptionBase {
    Description: string;
    Id: string;
    Selected: boolean;
}

export const data: Option[] = [
    {
        Description: 'Banana',
        Id: 'BANANA',
        Selected: true,
    },
    {
        Description: 'Apple',
        Id: 'APPLE',
        Selected: false,
    },
    {
        Description: 'Orange',
        Id: 'ORANGE',
        Selected: true,
    },
    {
        Description: 'Pear',
        Id: 'PEAR',
        Selected: true,
    },
    {
        Description: 'Strawberry',
        Id: 'STRAWBERRY',
        Selected: true,
    },
];

export default data;
