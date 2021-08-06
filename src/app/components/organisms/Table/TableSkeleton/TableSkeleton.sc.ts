import styled, { css, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../../types';
import getElevation from '../../../../styles/mixins/getElevation';

export const StyledTableSkeleton = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Header = styled.div`
    width: 20%;
    height: 24px;

    span {
        width: 100%;
        height: 100%;
    }
`;

export const SubHeader = styled.div`
    margin: 16px 0 0;
    width: 50%;
    height: 18px;

    span {
        width: 100%;
        height: 100%;
    }
`;

interface ItemWrapperProps {
    showRowsInCard: boolean;
}

export const ItemWrapper = styled.div<ItemWrapperProps>`
    margin: 16px 0;

    ${({ showRowsInCard, theme }): SimpleInterpolation =>
        showRowsInCard &&
        css`
            ${getElevation(Elevation.LEVEL_1)}
            background-color: ${theme.card.backgroundColor};
        `}
`;

export const Indicator = styled.div`
    margin-top: -4px; /* Correct the wrapper */
    width: 8px;
    height: 100%;
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 48px;
`;

export const Circle = styled.div`
    flex: 0 0 auto;
    margin: 0 0 0 16px;
    width: 32px;
    height: 32px;

    span {
        border-radius: 50%;
    }
`;

export const Row = styled.div`
    padding: 0 18px;
    width: 100%;
`;
