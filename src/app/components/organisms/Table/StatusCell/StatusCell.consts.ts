import mapArrayToObject from '../../../../utils/mapArrayToObject';
import { MatchTaskStatusesMap } from './types';

export const MATCH_TASK_STATUSES = mapArrayToObject([
    'NO_DRESSINGROOMS',
    'NO_FIELD',
    'NO_OFFICIALS',
    'NONE',
    'SCHEDULED',
]) as MatchTaskStatusesMap;

export default MATCH_TASK_STATUSES;
