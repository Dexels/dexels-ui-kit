import { getStatusColor } from '../../../../styles/mixins/getStatusColor';
import { setBoxSizing } from '../../../../styles/mixins/setBoxSizing';
import { Status } from '../../../../types';
import styled from 'styled-components';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledStatusCell = styled.div`
    ${setBoxSizing()}
    display: flex;
    height: 100%;
`;

interface IconWrapperProps {
    status: Status;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    align-items: center;
    padding: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ status, theme }): string => getStatusColor(status, theme)};
    font-size: ${({ theme }): string => theme.spacing(3)};
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledStatusCell;
