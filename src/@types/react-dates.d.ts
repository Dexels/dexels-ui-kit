/*
 * Ambient module declaration as the typings for react-dates constants are not implemented.
 * This is needed in order to have noImplicitAny turned on in tsconfig.
 */
declare module 'react-dates/lib/constants' {
    export const HORIZONTAL_ORIENTATION = 'horizontal';
}
