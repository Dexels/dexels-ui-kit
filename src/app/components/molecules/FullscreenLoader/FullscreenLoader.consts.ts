import { FullscreenLoaderTypesMap } from './types';
import mapArrayToObject from '../../../utils/mapArrayToObject';

export const FULLSCREEN_LOADER_TYPES = mapArrayToObject([
    'CIRCLES',
]) as FullscreenLoaderTypesMap;

export default FULLSCREEN_LOADER_TYPES;
