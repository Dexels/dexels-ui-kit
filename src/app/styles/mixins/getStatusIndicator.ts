import { Sizes, Statuses, Theme } from '../../types';
import { css } from 'styled-components';
import getStatusColor from './getStatusColor';
import { STATUS_INDICATOR_SIZES } from '../../components/atoms/StatusIndicator/StatusIndicator.consts';

export const getStatusIndicator = (status: Statuses, theme: Theme, placement: string, size: Sizes) => (css`
    border-${placement}: ${theme.spacing(size === STATUS_INDICATOR_SIZES.LARGE ? 1 : 0.5)} solid ${getStatusColor(status, theme)};
`);

export default getStatusIndicator;
