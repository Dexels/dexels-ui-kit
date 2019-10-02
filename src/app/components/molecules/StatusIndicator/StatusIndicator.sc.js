import { getStatusColor } from '../../../styles/mixins/getStatusColor';
import styled from 'styled-components';

export const StyledStatusIndicator = styled.div`
    display: flex;
    flex-direction: ${({ statusPlacement }) => statusPlacement === 'BOTTOM' && 'row-reverse'};
    flex-direction: ${({ statusPlacement }) => statusPlacement === 'LEFT' && 'column'};
    flex-direction: ${({ statusPlacement }) => statusPlacement === 'RIGHT' && 'column-reverse'};
    flex-direction: ${({ statusPlacement }) => statusPlacement === 'TOP' && 'row'};
    flex-wrap: nowrap;
    border-radius: inherit;
    background-color: ${({ status }) => getStatusColor(status)};
    padding: 0;
    width: ${({ size, statusPlacement }) => (statusPlacement === 'LEFT' || statusPlacement === 'RIGHT') && size};
    width: ${({ statusPlacement }) => (statusPlacement === 'BOTTOM' || statusPlacement === 'TOP') && '100%'};
    height: ${({ size, statusPlacement }) => (statusPlacement === 'BOTTOM' || statusPlacement === 'TOP') && size};
    height: ${({ statusPlacement }) => (statusPlacement === 'LEFT' || statusPlacement === 'RIGHT') && '100%'};
`;

export default StyledStatusIndicator;
