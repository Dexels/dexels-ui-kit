import { ICON_TYPES } from '../../../atoms/Icon/Icon.consts';

/* The object shape
import PropTypes from 'prop-types';

const menuItemShape = PropTypes.shape({
    isActive: PropTypes.bool.isRequired,
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
});

const menuItemObject = PropTypes.shape({
    children: [
        menuItemShape,
    ],
    menuItemShape,
    iconType: PropTypes.string,
    isExpanded: PropTypes.bool.isRequired,
});
*/

// Example how you can handle menu clicks
/* eslint-disable-next-line */
const handleOnClick = (text, event = null) => {
    /* eslint-disable-next-line */
    console.log('*********************** handleOnClick : ', text, event)
};

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

export default menuItems;
