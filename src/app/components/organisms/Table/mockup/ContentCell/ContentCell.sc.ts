import { setBoxSizing } from '../../../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../../../styles/theming/themes/basic';

export const StyledContentCell = styled.div`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body2)}
    color: ${({ theme }): string => theme.colorText.primary};
`;

StyledContentCell.defaultProps = {
    theme: themeBasic,
};

export default StyledContentCell;
