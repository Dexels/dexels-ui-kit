import getElevation from '../../../styles/mixins/getElevation';
import styled from 'styled-components';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

export default StyledCardStatusWrapper;
