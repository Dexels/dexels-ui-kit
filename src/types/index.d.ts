// Type definitions for dexels-ui-kit 1.0.42
// Project: dexels-ui-kit
// Definitions by: David de Lusenet <https://github.com/daviddelusenet>
// TypeScript Version: 3.7.2

// References to types which our library depends on
/// <reference types="react" />

// Set up the project namespace, should be the same as the output.library field in the webpack config
export as namespace DexelsUIKit;

// Typings for functions/variables exported by the DexelsUIKit package
export function createDuiTheme(baseTheme: object, overrides: object): object;

export const themeBasic: {
    [key: string]: any;
    shades: {
        one: string;
        two: string;
        three: string;
        four: string;
        five: string;
        six: string;
        seven: string;
        eight: string;
        nine: string;
    }
    colorPrimary: string;
    colorSecondary: string;
    colorTertiary: string;
    colorAlert: string;
    colorInvalid: string;
    colorValid: string;
    spacing: (factor1: number, factor2?: number, factor3?: number, factor4?: number) => string;
}

// Typings for components exported by the DexelsUIKit package
export type elevations = 'LEVEL_0' | 'LEVEL_1' | 'LEVEL_2' | 'LEVEL_3' | 'LEVEL_4' | 'LEVEL_6' | 'LEVEL_8' | 'LEVEL_12' | 'LEVEL_16' | 'LEVEL_24';
export type positions = 'BOTTOM_CENTER' | 'BOTTOM_LEFT' | 'BOTTOM_RIGHT' | 'MIDDLE_CENTER' | 'MIDDLE_LEFT' | 'MIDDLE_RIGHT' | 'TOP_CENTER' | 'TOP_LEFT' | 'TOP_RIGHT';

export interface ErrorMessageProps {
    children: React.ReactNode;
}

export const ErrorMessage: React.FunctionComponent<ErrorMessageProps>;

export interface CardProps {
    children: React.ReactNode,
    elevation?: elevations,
    hasBorderRadius?: boolean,
    position?: positions,
}

export const Card: React.FunctionComponent<CardProps>;
