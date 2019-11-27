# How to use the menu component
### You can implement some extra props in the example below, like authorization values

There is no complete menu, but there are MenuItem and SubMenuItem components.<br/>
With those 2 elements you can build a menu like described below.<br />
In the stories file, you'll find a nice working example of how to deal with expanded/selected props.

**Menu definition example**:

```jsx
export const menuItems = [
    {
        iconType: ICON_TYPES.SHIRT,
        isActive: false,
        isDisabled: false,
        isExpanded: false,
        onClick: null,
        // Example line
        // onClick: (event) => handleOnClick('Tournament', event),
        text: 'Tournament',
    },
    {
        children: [
            {
                isActive: false,
                onClick: null,
                text: 'Fields',
            },
        ],
        iconType: ICON_TYPES.MATCHOWN,
        isActive: false,
        isExpanded: false,
        onClick: null,
        text: 'Matches',
    },
    {
        children: [
            {
                isActive: false,
                onClick: null,
                text: 'Teams',
            },
            {
                isActive: false,
                onClick: null,
                text: 'Officials',
            },
        ],
        iconType: ICON_TYPES.LIGHTBULB,
        isActive: false,
        isExpanded: false,
        onClick: null,
        text: 'Competition',
    },
];
```
