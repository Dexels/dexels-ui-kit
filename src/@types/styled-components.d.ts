import { Theme } from '../app/types';

declare module 'styled-components' {
    export interface DefaultTheme extends Theme {}
}
