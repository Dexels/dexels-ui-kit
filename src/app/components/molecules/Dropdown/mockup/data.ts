export interface Fruit {
    Id: number;
    IsSelected: boolean;
    Name: string;
}

export const fruitOptions: Fruit[] = [
    {
        Id: 1,
        IsSelected: true,
        Name: 'Banana',
    },
    {
        Id: 2,
        IsSelected: false,
        Name: 'Apple',
    },
    {
        Id: 3,
        IsSelected: false,
        Name: 'Pear',
    },
    {
        Id: 4,
        IsSelected: false,
        Name: 'Mango',
    },
];
