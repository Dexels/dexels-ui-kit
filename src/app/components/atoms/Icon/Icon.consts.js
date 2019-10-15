// Since we don't want to include a selection.json in our distribution bundle we've came up wih the following solution:
// - If the contents of selection.json ever change just uncomment the import below and start Storybook
// - Open the console, the generated icon types should be logged there
// - Copy these to this file and outcomment the import again
// The contents copied from the console while cause of bunch of ESLint errors, but don't worry, you can fix these
// automatically by running npm run lint:js -- --fix in the console
// The only thing which isn't automatically fixed is the sort-keys rule but this can be done quite easily by
// using some good ol' manual labor
// I knoe this solution is a little bit weird but it's still better than including a 40 kb JSON file in our bundle
// If you manage to come up with a better solution don't hesitate to implement it!
// import '../../../utils/getIconTypes';

export const ICON_TYPES = {
    ADD: 'Add',
    ALERT: 'Alert',
    ALLOCATE: 'Allocate',
    ARROW_DOWN: 'Arrow-Down',
    ARROW_LEFT: 'Arrow-Left',
    ARROW_RIGHT: 'Arrow-Right',
    ARROW_UP: 'Arrow-Up',
    CALENDAR: 'Calendar',
    CAR: 'Car',
    CARDS: 'Cards',
    CHANGE: 'Change',
    CHECK: 'Check',
    CHEVRON_DOWN: 'Chevron-Down',
    CHEVRON_LEFT: 'Chevron-Left',
    CHEVRON_RIGHT: 'Chevron-Right',
    CHEVRON_UP: 'Chevron-Up',
    CLOCK: 'Clock',
    CLOSE: 'Close',
    CLUB_SHIELD: 'Club-Shield',
    CLUB_SHIRT: 'Club-Shirt',
    CONCEPT: 'Concept',
    CONCEPTALERT: 'ConceptAlert',
    DONE: 'Done',
    DROP_DOWN: 'Drop-Down',
    DROP_UP: 'Drop-Up',
    ERROR: 'Error',
    HELP: 'Help',
    HOME: 'Home',
    INDICATOR: 'Indicator',
    INFO: 'Info',
    LOCKED: 'Locked',
    LOGOUT: 'Logout',
    MAIL: 'Mail',
    MATCH_A_COMP: 'Match-A-comp',
    MATCH_B_COMP: 'Match-B-comp',
    MATCH_CONE: 'Match-Cone',
    MATCH_CUP: 'Match-Cup',
    MENU: 'Menu',
    MINUS: 'Minus',
    MOVE_ALL: 'Move-All',
    MOVE_LEFTRIGHT: 'Move-LeftRight',
    MOVE_UPDOWN: 'Move-UpDown',
    NOTIFICATION: 'Notification',
    OPTIONS: 'Options',
    PENCIL: 'Pencil',
    PIN: 'Pin',
    PLUS: 'Plus',
    POSTBOXIN: 'PostboxIn',
    POSTBOXOUT: 'PostboxOut',
    REMOVE: 'Remove',
    SEARCH: 'Search',
    SEND: 'Send',
    SETTINGS: 'Settings',
    SHARE: 'Share',
    SUSPENDED: 'Suspended',
    TIP: 'Tip',
    TRASH: 'Trash',
    UNLOCKED: 'Unlocked',
    USER: 'User',
    USERCIRCLE: 'UserCircle',
    VISIBILITY_OFF: 'Visibility-Off',
    VISIBILITY_ON: 'Visibility-On',
    WORLD: 'World',
};

export default ICON_TYPES;
