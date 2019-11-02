import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TABLE_ELEVATIONS } from './Table.consts';

export const TableCaption = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

export const StyledTable = styled.table`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    background-color: transparent;
    border-spacing: 0;

    ${({ isFullWidth }) => isFullWidth && css`
        width: 100%;
    `};
`;

StyledTable.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TABLE_ELEVATIONS)).isRequired,
    isFullWidth: PropTypes.bool.isRequired,
};

export const TableHead = styled.thead`
    background-color: transparent;
`;

export const TableHeaderRow = styled.tr`
    height: ${({ theme }) => theme.spacing(4.5)};
`;

export const TableHeaderCell = styled.th`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border-bottom: 4px solid;
    border-color: ${({ theme }) => theme.colorPrimary};
    background-color: ${({ theme }) => theme.shades.nine};
    /* padding: ${({ theme }) => theme.spacing(1)}; */
    text-align: left;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

export const TableBody = styled.tbody`
    color: ${({ theme }) => theme.shades.nine};
`;

export const TableRow = styled.tr`
    position: relative;
    /* border-spacing: ${({ theme }) => theme.spacing(0.125)}; */
    z-index: 1;

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.shades.nine};
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.shades.eight};
    }

    &:hover {
        ${getElevation(TABLE_ELEVATIONS.LEVEL_3)};
        z-index: 2;
    }
`;

export const TableCell = styled.td`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.shades.seven};
    /* padding: ${({ theme }) => theme.spacing(1)}; */
    padding: 0;
    height: ${({ theme }) => theme.spacing(6)};
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

export const TableFooter = styled.tfoot`
    background-color: transparent;
`;
