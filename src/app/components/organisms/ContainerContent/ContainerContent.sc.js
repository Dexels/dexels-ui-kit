import getElevation from '../../../styles/mixins/getElevation';
import getPosition from '../../../styles/mixins/getPosition';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledContainerContent = styled.div`
    ${setBoxSizing()};
    ${({ position }) => getPosition(position)};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    border: 0;
    background-color: transparent;
    padding: ${spacingUnit};
`;

export default StyledContainerContent;
