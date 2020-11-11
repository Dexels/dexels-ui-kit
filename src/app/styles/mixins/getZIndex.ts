export enum zIndexComponent {
    DIALOG = 'DIALOG',
    DIALOGOVERLAYWRAPPER = 'DIALOGOVERLAYWRAPPER',
    DIALOGWRAPPER = 'DIALOGWRAPPER',
    MODAL = 'MODAL',
    OVERLAY = 'OVERLAY',
    SIDEPANEL = 'SIDEPANEL',
    TOOLTIP = 'TOOLTIP',
}

const getZIndex = (element: zIndexComponent): number => {
    switch (element) {
        case zIndexComponent.DIALOG:
            return 10000;

        case zIndexComponent.DIALOGOVERLAYWRAPPER:
            return 9998;

        case zIndexComponent.DIALOGWRAPPER:
            return 9999;

        case zIndexComponent.MODAL:
            return 9997;

        case zIndexComponent.OVERLAY:
            return 2;

        case zIndexComponent.SIDEPANEL:
            return 6;

        case zIndexComponent.TOOLTIP:
            return 99999999;

        default:
            return 0;
    }
};

export default getZIndex;
