import { Alignment, Elevation } from '../../../types';
import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import getAlignment from '../../../styles/mixins/getAlignment';
import { getElevation } from '../../../styles/mixins/getElevation';
import { IconCustomizableSize } from '../../molecules/IconCustomizable/types';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

const alignRightSpacing = 1; // value is the spacing value from the theme. This value is taken from the invision ui-kit light base row.

interface ColumnProps {
    hasCellPadding?: boolean;
    width?: string | number;
}

interface ClickableProps {
    isClickable: boolean;
}

export const TableCaption = styled.div`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().h1)}
    padding: ${({ theme }): string => theme.spacing(0, 0, 4, 0)};
    color: ${({ theme }): string => theme.colorText.primary};
`;

interface StyledTableProps {
    isFullWidth: boolean;
}
export const TableWrapper = styled.div`
    margin: -8px;
    overflow: auto;
`;

export const StyledTable = styled.table<StyledTableProps>`
    ${setBoxSizing()}
    background-color: transparent;
    padding: 8px;
    border-collapse: separate;
    border-spacing: 0;

    ${({ isFullWidth }): SimpleInterpolation =>
        isFullWidth &&
        css`
            width: 100%;
        `}
`;

StyledTable.defaultProps = {
    theme: themeBasic,
};

export const NoResultsRow = styled.tr`
    ${getElevation(Elevation.LEVEL_1)}
    background-color: ${({ theme }): string => theme.colorPrimary};
`;

NoResultsRow.defaultProps = {
    theme: themeBasic,
};

export const NoResultsContent = styled.td`
    ${getElevation(Elevation.LEVEL_1)}
`;

NoResultsContent.defaultProps = {
    theme: themeBasic,
};

export const TableHead = styled.thead`
    background-color: transparent;
`;

export const TableHeaderRow = styled.tr`
    background-color: transparent;
`;

interface TableHeaderCellProps extends ColumnProps {
    isDisabled: boolean;
}

export const TableHeaderCell = styled.th<TableHeaderCellProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    border-bottom: 4px solid ${({ isDisabled, theme }): string =>
        isDisabled ? theme.colorDisabled : theme.colorPrimary};
    background-color: transparent;
    padding: ${({ hasCellPadding = true, theme }): string => theme.spacing(0.5, hasCellPadding ? 0.5 : 0, 1)};
    height: ${({ theme }): string => theme.spacing(5)};
    vertical-align: middle;
    text-align: left;
    color: ${({ isDisabled, theme }): string => (isDisabled ? theme.colorDisabled : theme.colorTextBody.primary)};
    font-weight: 600;

    ${({ width }): SimpleInterpolation =>
        width &&
        css`
            width: ${typeof width === 'number' ? `${width}px` : width};
        `}
`;

TableHeaderCell.defaultProps = {
    theme: themeBasic,
};

interface TableHeaderCellInnerProps {
    align?: Alignment;
    isSorted: boolean;
}

export const TableHeaderCellInner = styled.div<TableHeaderCellInnerProps>`
    ${({ align = Alignment.LEFT }): FlattenSimpleInterpolation => getAlignment(align)}
    display: flex;
    flex-wrap: nowrap;
    align-items: center;

    .icon {
        flex: 0 0 auto;
        padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};
        color: ${({ isSorted, theme }): string => (isSorted ? theme.colorText.primary : theme.colorDisabled)};
        font-size: ${IconCustomizableSize.SIZE18}px;
    }

    ${({ align, theme }): SimpleInterpolation =>
        align === Alignment.RIGHT &&
        css`
            padding: ${theme.spacing(0, alignRightSpacing, 0, 0)};
        `}
`;

TableHeaderCellInner.defaultProps = {
    theme: themeBasic,
};

export const TableHeaderCellContent = styled.div`
    flex: 0 1 auto;
`;

interface TableBodyProps {
    elevation: Elevation;
}

export const TableBody = styled.tbody<TableBodyProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
`;

TableBody.defaultProps = {
    theme: themeBasic,
};

interface TableRowProps extends ClickableProps {}

export const TableRow = styled.tr<TableRowProps>`
    position: relative;

    ${({ isClickable }): SimpleInterpolation =>
        isClickable &&
        css`
            cursor: pointer;
        `}

    &:nth-child(odd) {
        background-color: ${({ theme }): string => theme.table.row.backgroundColorOdd};

        &:hover td::after {
            background-color: ${({ theme }): string => theme.table.row.backgroundColorOdd};
        }
    }

    &:nth-child(even) {
        background-color: ${({ theme }): string => theme.table.row.backgroundColorEven};

        &:hover td::after {
            background-color: ${({ theme }): string => theme.table.row.backgroundColorEven};
        }
    }

    &:hover td {
        ${getElevation(Elevation.LEVEL_3)}
    }
`;

TableRow.defaultProps = {
    theme: themeBasic,
};

interface TableCellProps extends ColumnProps, ClickableProps {}

export const TableCell = styled.td<TableCellProps>`
    position: relative;
    padding: ${({ hasCellPadding = true, theme }): string => theme.spacing(hasCellPadding ? 0.5 : 0)};
    height: ${({ theme }): string => theme.spacing(6)};
    vertical-align: middle;

    ${({ width }): SimpleInterpolation =>
        width &&
        css`
            width: ${typeof width === 'number' ? `${width}px` : width};
        `}

    &::after {
        position: absolute;
        top: 0;
        right: -10px;
        z-index: 1;
        width: 20px;
        height: 100%;
        content: '';
    }

    &:last-child {
        overflow: hidden;
    }

    ${({ isClickable }): SimpleInterpolation =>
        isClickable &&
        css`
            cursor: pointer;
        `}
`;

TableCell.defaultProps = {
    theme: themeBasic,
};

export interface TableCellContentProps {
    align?: Alignment;
}

export const TableCellContent = styled.div<TableCellContentProps>`
    ${({ align = Alignment.LEFT }): FlattenSimpleInterpolation => getAlignment(align)}
    display: flex;
    position: relative;
    align-items: center;
    z-index: 2;
    height: 100%;

    ${({ align, theme }): SimpleInterpolation =>
        align === Alignment.RIGHT &&
        css`
            padding: ${theme.spacing(0, alignRightSpacing, 0, 0)};
        `}
`;

interface TableFooterProps {
    elevation: Elevation;
}

export const TableFooter = styled.tfoot<TableFooterProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    background-color: ${({ theme }): string => theme.table.footer.backgroundColor};
`;

export const TableFooterRow = styled.tr`
    background-color: transparent;
`;

interface TableFooterCellProps extends ColumnProps {
    isDisabled: boolean;
    isTitleColumn: boolean;
}

export const TableFooterCell = styled(TableCell)<TableFooterCellProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    border-top: 4px solid ${({ theme }): string => theme.shades.six};
    background-color: transparent;
    text-align: left;
    color: ${({ isDisabled, theme }): string => (isDisabled ? theme.colorDisabled : theme.colorTextBody.primary)};
    font-weight: 600;

    ${({ isTitleColumn }): SimpleInterpolation =>
        isTitleColumn &&
        css`
            flex: 100 0 auto;
        `}

    ${({ isTitleColumn, width }): SimpleInterpolation =>
        isTitleColumn &&
        css`
            width: ${typeof width === 'number' ? `${width}px` : width} !important;
        `}

    &:first-of-type {
        border-left: 8px solid ${({ theme }): string => theme.shades.six};
        padding: ${({ theme }): string => theme.spacing(0.5, 0.5, 1, 1.5)};
    }
`;

TableFooterCell.defaultProps = {
    theme: themeBasic,
};

export const TableFooterCellInner = styled(TableHeaderCellInner)`
    min-height: 100%;
`;

export const TableFooterCellContent = styled(TableHeaderCellContent)``;

interface FooterWrapperProps extends ClickableProps {
    elevation: Elevation;
}

export const FooterWrapper = styled.div<FooterWrapperProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    border-top: 4px solid ${({ theme }): string => theme.shades.six};
    border-left: 8px solid ${({ theme }): string => theme.shades.six};
    background-color: ${({ theme }): string => theme.table.footer.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(1.5)};
    width: 100%;
    min-height: ${({ theme }): string => theme.spacing(6)}; /* Maintain same height as tablecell */
    caption-side: bottom;
    text-align: left;

    ${({ isClickable }): SimpleInterpolation =>
        isClickable &&
        css`
            cursor: pointer;

            &:hover div {
                ${getElevation(Elevation.LEVEL_3)}
            }
        `}
`;

export const PaginatorWrapper = styled.div`
    padding: ${({ theme }): string => theme.spacing(1.5, 0, 0)};
`;
