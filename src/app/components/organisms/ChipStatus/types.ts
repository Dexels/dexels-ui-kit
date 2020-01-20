export type ChipStatusVariants = 'DESELECTED' | 'INDETERMINATE' | 'SELECTED';
export type ChipStatusVariantsMap = {
    [Variant in ChipStatusVariants]: Variant;
}
