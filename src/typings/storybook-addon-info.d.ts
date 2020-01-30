/*
 * Ambient module declaration as something in @types/storybook__addon-info (if installed)
 * clashes with type declaration generation - Error: 'Cannot find symbol for node: api'
 * This is needed in order to have noImplicitAny turned on in tsconfig.
 */
declare module '@storybook/addon-info';
