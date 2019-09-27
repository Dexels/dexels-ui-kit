import styled, { css } from 'styled-components';
import { TOOLTIP_ELEVATIONS, TOOLTIP_PLACEMENTS } from './Tooltip.consts';
import defaultTheme from '../../../styles/theme/theme';
import getElevation from '../../../styles/mixins/getElevation';
import getPlacement from '../../../styles/mixins/getPlacement';
import PropTypes from 'prop-types';
import validateThemePropTypes from '../../../utils/validateThemePropTypes';

// function cssPartContainer(placement = TOOLTIP_PLACEMENTS.BOTTOM_CENTER) {
//     return (
//         css`
//             .tooltip {
//                 display:inline-block;
//                 position:relative;
//                 border-bottom:1px dotted #666;
//                 text-align:left;
//             }

//             .tooltip .top {
//                 min-width:200px;
//                 top:-20px;
//                 left:50%;
//                 transform:translate(-50%, -100%);
//                 padding:10px 20px;
//                 color:#444444;
//                 background-color:#EEEEEE;
//                 font-weight:normal;
//                 font-size:13px;
//                 border-radius:8px;
//                 position:absolute;
//                 z-index:99999999;
//                 box-sizing:border-box;
//                 box-shadow:0 1px 8px rgba(0,0,0,0.5);
//                 visibility:hidden; opacity:0; transition:opacity 0.8s;
//             }

//             .tooltip:hover .top {
//                 visibility:visible; opacity:1;
//             }

//             .tooltip .top i {
//                 position:absolute;
//                 top:100%;
//                 left:50%;
//                 margin-left:-12px;
//                 width:24px;
//                 height:12px;
//                 overflow:hidden;
//             }

//             .tooltip .top i::after {
//                 content:'';
//                 position:absolute;
//                 width:12px;
//                 height:12px;
//                 left:50%;
//                 transform:translate(-50%,-50%) rotate(45deg);
//                 background-color:#EEEEEE;
//                 box-shadow:0 1px 8px rgba(0,0,0,0.5);
//             }
//         `
//     );
// }

export const StyledTooltipContainer = styled.div`
    display: inline-block;
    position: relative;

    &:hover {
        visibility: visible;
        opacity: 1;
    }
`;

export const StyledTooltip = styled.div`
    position: absolute;
    /* top: -10px;
    left: 50%; */
    transform: translate(-50%, -100%);
    transition: opacity 0.8s;
    /* visibility: hidden;
    opacity: 0; */
    z-index: 99999999;
    border-radius: ${({ theme }) => theme.tooltip.borderRadius};
    background-color: ${({ theme }) => theme.tooltip.backgroundColor};
    padding: ${({ theme }) => theme.tooltip.padding};
    min-width: 100px;
    ${({ elevation }) => getElevation(elevation)};
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: ${({ theme }) => theme.tooltip.colorPrimary};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().tooltip)};
    ${({ placement }) => getPlacement(placement)};
`;

export default StyledTooltip;

StyledTooltip.propTypes = {
    elevation: PropTypes.oneOf(Object.values(TOOLTIP_ELEVATIONS)),
    placement: PropTypes.oneOf(Object.values(TOOLTIP_PLACEMENTS)),
    theme: PropTypes.shape({
        tooltip: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
};

StyledTooltip.defaultProps = {
    theme: defaultTheme,
};
