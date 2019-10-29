import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TABLE_ELEVATIONS } from './Table.consts';

export const StyledTableCaption = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h1)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};
    color: ${({ theme }) => theme.colorPrimary.dark};
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

export const StyledTableHead = styled.thead`
    ${setBoxSizing()};
    background-color: transparent;
`;

export const StyledTableHeaderRow = styled.tr`
    ${setBoxSizing()};
    height: ${({ theme }) => theme.spacing(4.5)};
`;

export const StyledTableHeaderCell = styled.th`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border-bottom: 4px solid;
    border-color: ${({ theme }) => theme.colorPrimary.dark};
    background-color: ${({ theme }) => theme.colorLight.light};
    padding: ${({ theme }) => theme.spacing(1)};
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorDark.main};
`;

export const StyledTableBody = styled.tbody`
    ${setBoxSizing()};
    color: ${({ theme }) => theme.colorLight.light};
`;

export const StyledTableRow = styled.tr`
    ${setBoxSizing()};
    height: ${({ theme }) => theme.spacing(4.5)};

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colorLight.light};
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colorLight.main};
    }

    &:hover {
        ${getElevation(TABLE_ELEVATIONS.LEVEL_3)};
    }
`;

export const StyledTableCell = styled.td`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    border-bottom: 1px solid;
    border-color: ${({ theme }) => theme.colorLight.dark};
    padding: ${({ theme }) => theme.spacing(1)};
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorDark.main};
`;
