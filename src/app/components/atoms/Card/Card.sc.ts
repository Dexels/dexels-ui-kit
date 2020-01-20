import styled, { css } from 'styled-components';
import { Elevations } from '../../../types';
import getElevation from '../../../styles/mixins/getElevation';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../styles/theming/themes/basic';

export interface StyledCardProps {
    elevation?: Elevations;
    hasBorderRadius?: boolean;
}

export const StyledCard = styled.div<StyledCardProps>`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    ${({ elevation }) => getElevation(elevation)}
    background-color: ${({ theme }) => theme.card.backgroundColor};
    color: ${({ theme }) => theme.colorText.primary};

    ${({ hasBorderRadius, theme }) => hasBorderRadius && css`
        border-radius: ${theme.spacing(0.5)};
    `}
`;

StyledCard.defaultProps = {
    theme: themeBasic,
};

export default StyledCard;
