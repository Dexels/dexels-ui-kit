import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TABLE_ELEVATIONS } from './Table.consts';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const TableCaption = styled.div`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)}
    padding: ${({ theme }) => theme.spacing(0, 0, 4, 0)};
    color: ${({ theme }) => theme.colorText.primary};
`;

export const StyledTable = styled.table`
    ${setBoxSizing()}
    background-color: transparent;
    border-spacing: 0;

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `}
`;

StyledTable.propTypes = {
    isFullWidth: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledTable.defaultProps = {
    theme: themeBasic,
};

export const TableHead = styled.thead`
    background-color: transparent;
`;

export const TableHeaderRow = styled.tr`
    background-color: transparent;
`;

export const TableHeaderCell = styled.th`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    border-bottom: 4px solid;
    border-color: ${({ theme }) => theme.colorPrimary};
    background-color: transparent;
    padding: ${({ hasCellPadding, theme }) => (hasCellPadding ? theme.spacing(0.5, 0.5, 1, 0.5) : theme.spacing(0))};
    height: ${({ theme }) => theme.spacing(5)};
    text-align: left;
    color: ${({ theme }) => theme.colorText.primary};
    font-weight: 600;
`;

TableHeaderCell.propTypes = {
    hasCellPadding: PropTypes.bool,
    theme: themePropTypes,
};

TableHeaderCell.defaultProps = {
    hasCellPadding: true,
    theme: themeBasic,
};

export const TableBody = styled.tbody`
    ${({ elevation }) => getElevation(elevation)}
    color: ${({ theme }) => theme.shades.nine};
`;

TableBody.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TABLE_ELEVATIONS)).isRequired,
    theme: themePropTypes,
};

TableBody.defaultProps = {
    theme: themeBasic,
};

export const TableRow = styled.tr`
    position: relative;
    z-index: 1;

    ${({ isClickable }) => isClickable && css`
        cursor: pointer;
    `}

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.table.row.backgroundColorOdd};
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.table.row.backgroundColorEven};
    }

    &:hover {
        ${getElevation(TABLE_ELEVATIONS.LEVEL_3)}
        z-index: 2;
    }
`;

TableRow.propTypes = {
    isClickable: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

TableRow.defaultProps = {
    theme: themeBasic,
};

export const TableCell = styled.td`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    padding: ${({ hasCellPadding, theme }) => theme.spacing(hasCellPadding ? 0.5 : 0)};
    height: ${({ theme }) => theme.spacing(6)};
    color: ${({ theme }) => theme.colorText.primary};

    ${({ isClickable }) => isClickable && css`
        cursor: pointer;
    `}
`;

TableCell.propTypes = {
    hasCellPadding: PropTypes.bool,
    isClickable: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

TableCell.defaultProps = {
    hasCellPadding: true,
    theme: themeBasic,
};

export const IconWrapper = styled.span`
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
    color: ${({ isSorted, theme }) => (isSorted ? theme.colorText.primary : theme.colorDisabled)};
`;

IconWrapper.propTypes = {
    isSorted: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const TableFooter = styled.tfoot`
    ${({ elevation }) => getElevation(elevation)}
    background-color: transparent;
`;

TableFooter.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TABLE_ELEVATIONS)).isRequired,
};

export const Paging = styled.div`
    background-color: transparent;
`;
