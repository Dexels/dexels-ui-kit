import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledTextIcon = styled.div`
    ${setBoxSizing()};
    ${textStyling(availableTextStyles().body2)};
    border: 0;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.colorMedium.dark};
    width: ${({ theme }) => `calc(${theme.spacingUnit} * 3)`};
    height: ${({ theme }) => `calc(${theme.spacingUnit} * 3)`};
    text-align: center;
    line-height: ${({ theme }) => `calc(${theme.spacingUnit} * 3)`};
    color: ${({ theme }) => theme.colorLight.light};
`;

export default StyledTextIcon;
