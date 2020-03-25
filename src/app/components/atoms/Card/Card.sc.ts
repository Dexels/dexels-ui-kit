import styled, { css, FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Elevation } from '../../../types';
import { getElevation } from '../../../styles/mixins/getElevation';
import { setBoxSizing } from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledCardProps {
    elevation: Elevation;
    hasBorderRadius: boolean;
}

export const StyledCard = styled.div<StyledCardProps>`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    ${({ elevation }): FlattenSimpleInterpolation => getElevation(elevation)}
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: ${({ theme }): string => theme.card.backgroundColor};
    width: 100%;
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ hasBorderRadius, theme }): SimpleInterpolation => hasBorderRadius && css`
        border-radius: ${theme.spacing(0.5)};
    `}
`;

StyledCard.defaultProps = {
    theme: themeBasic,
};

export default StyledCard;
