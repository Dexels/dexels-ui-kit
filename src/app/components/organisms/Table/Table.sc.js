import styled, { css } from 'styled-components';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TABLE_ELEVATIONS } from './Table.consts';

export const StyledTable = styled.table`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    background-color: transparent;

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
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorDark.main};
`;

export const StyledTableBody = styled.tbody`
    ${setBoxSizing()};
    background-color: green;
    color: white;
    background-color: transparent;
`;

export const StyledTableRow = styled.tr`
    ${setBoxSizing()};
    /* display: flex;
    position: fixed;
    z-index: 1;
    overflow: auto; */
`;

export const StyledTableCell = styled.td`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    background-color: ${({ theme }) => theme.colorLight.light};
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.colorDark.main};
`;
