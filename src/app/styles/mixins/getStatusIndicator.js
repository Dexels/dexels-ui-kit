import { css } from 'styled-components';
import getStatusColor from './getStatusColor';
import { STATUS_INDICATOR_SIZES } from '../../components/atoms/StatusIndicator/StatusIndicator.consts';

export default (status, theme, placement, size) => (css`
    border-color: ${getStatusColor(status, theme)};
    border-${placement}: ${theme.spacing(size === STATUS_INDICATOR_SIZES.LARGE ? 1 : 0.5)} solid;
`);
