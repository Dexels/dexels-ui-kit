import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TABLE_ELEVATIONS } from './Table.consts';

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
    color: white;
`;

export const StyledTableRow = styled.tr`
    ${setBoxSizing()};
    height: 36px;
    /* display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto; */

    &:nth-child(odd) {
        background-color: ${({ theme }) => theme.colorLight.light};
    }

    &:nth-child(even) {
        background-color: ${({ theme }) => theme.colorLight.main};
    }
`;

export const StyledTableCell = styled.td`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    padding: ${({ theme }) => theme.spacing(1)};
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorDark.main};
`;
