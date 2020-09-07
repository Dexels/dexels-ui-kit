import styled, { FlattenSimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';

export const StyledDropdownSelect = styled.div`
    position: relative;
`;

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

export const LabelWrapper = styled.div``;
