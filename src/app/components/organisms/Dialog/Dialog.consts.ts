import { ALIGNMENTS, EASINGS, ELEVATIONS } from '../../../utils/constants';
import { DialogCloseButtonPositionsMap } from './types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const DIALOG_BODY_ALIGNMENTS = ALIGNMENTS;

export const DIALOG_BUTTON_CLOSE_POSITIONS = mapArrayToObject([
    'LEFT',
    'RIGHT',
]) as DialogCloseButtonPositionsMap;

export const DIALOG_ELEVATIONS = ELEVATIONS;

export const DIALOG_EASINGS = EASINGS;

export const DIALOG_HEADER_ALIGNMENTS = ALIGNMENTS;
