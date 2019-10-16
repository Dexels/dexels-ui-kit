// import {
//     colorSignalDisabled,
//     colorSignalError,
//     colorSignalOk,
//     colorSignalStandard,
//     colorSignalWarning,
// } from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import { getStatus } from '../../../styles/mixins/getStatus';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledCardStatusWrapper = styled.div`
    ${({ elevation }) => getElevation(elevation)};
`;

export const StyledCardStatus = styled.div`
    ${({ status, statusPlacement, theme }) => getStatus(status, spacingUnit, statusPlacement, theme)};
`;
