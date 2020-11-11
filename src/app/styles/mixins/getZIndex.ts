export enum zIndexComponent {
    DIALOG = 10000,
    DIALOGOVERLAYWRAPPER = 9998,
    DIALOGWRAPPER = 9999,
    MODAL = 9997,
    OVERLAY = 2,
    SIDEPANEL = 6,
    TOOLTIP = 99999999,
}

export const getZIndex = (component: zIndexComponent): number => component;

export default getZIndex;
