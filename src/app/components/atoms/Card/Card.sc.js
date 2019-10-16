import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { backgroundColorPrimary, colorPrimary } from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import { spacingUnit } from '../../../styles/theme/layout';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledCard = styled.div`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body1)};
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    border-radius: 4px;
    background-color: ${backgroundColorPrimary};
    padding: ${spacingUnit};
    word-break: break-word;
    color: ${colorPrimary};
`;

export default StyledCard;
