export function getTypeNames(type: string) {
    const [typeName] = type.replace(/\/$/, '').split('/').splice(-1, 1);

    return typeName.toUpperCase();
}
