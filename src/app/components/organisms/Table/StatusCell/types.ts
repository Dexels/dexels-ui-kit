export type MatchTaskStatuses = 'NO_DRESSINGROOMS' | 'NO_FIELD' | 'NO_OFFICIALS' | 'NONE' | 'SCHEDULED';
export type MatchTaskStatusesMap = {
    [Status in MatchTaskStatuses]: Status;
}
