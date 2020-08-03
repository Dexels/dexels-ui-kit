import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';

export const StyledDropdownSelect = styled.div``;

interface SuggestionListProps {
    elevation: Elevation;
}

export const SuggestionList = styled.div<SuggestionListProps>`
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    position: absolute;
    z-index: 2;
    margin: ${({ theme }): string => theme.spacing(1, 0, 0, 0)};
    border-radius: ${({ theme }): string => theme.spacing(1)};
    background-color: ${({ theme }): string => theme.shades.nine};
    width: 100%;
`;

interface ListProps {
    maxHeight?: string;
}

export const List = styled.ul<ListProps>`
    margin: ${({ theme }): string => theme.spacing(1, 0)};
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    padding: ${({ theme }): string => theme.spacing(0)};
    overflow: auto;
    list-style-type: none;

    ${({ maxHeight }): SimpleInterpolation =>
        maxHeight &&
        css`
            max-height: ${maxHeight};
        `}
`;
