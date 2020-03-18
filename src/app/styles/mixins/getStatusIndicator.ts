import {
    Placement,
    Status,
    StatusIndicatorSize,
    Theme,
} from '../../types';
import { getStatusColor } from './getStatusColor';

export const getStatusIndicator = (status: Status, theme: Theme, placement: Placement, size: StatusIndicatorSize): string => (`
    border-${placement}: ${theme.spacing(size === StatusIndicatorSize.LARGE ? 1 : 0.5)} solid ${getStatusColor(status, theme)};
`);

export default getStatusIndicator;
