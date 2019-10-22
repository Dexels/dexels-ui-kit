import { availableTextStyles, textStyling } from '../../../styles/theme/textStyles';
import { borderRadius, spacingUnit } from '../../../styles/theme/layout';
import { colorBodyDark, themeModes } from '../../../styles/theme/theme';
import { grey100, white } from '../../../styles/colors/colors';
import { MODAL_ALIGNMENTS, MODAL_ELEVATIONS } from './Modal.consts';
import styled, { css } from 'styled-components';
import getAlignment from '../../../styles/mixins/getAlignment';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import theme from 'styled-theming';

const modalBodyBackgroundColor = theme('mode', {
    [themeModes.basic]: white,
    [themeModes.dark]: grey100,
    [themeModes.light]: white,
});

const modalBodyColor = theme('mode', {
    [themeModes.basic]: colorBodyDark,
    [themeModes.dark]: white,
    [themeModes.light]: colorBodyDark,
});

export const StyledModal = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    margin: auto;
    border-radius: ${spacingUnit};
    width: 100%;
    height: 100%;
`;

StyledModal.propTypes = {
    elevation: PropTypes.oneOf(Object.values(MODAL_ELEVATIONS)).isRequired,
};

export const HeaderWrapper = styled.header`
    display: flex;
`;

export const Body = styled.div`
    ${({ alignment }) => getAlignment(alignment)};
    ${textStyling(availableTextStyles().body1)};
    background-color: ${modalBodyBackgroundColor};
    padding: calc(${spacingUnit} * 2);
    height: inherit;
    color: ${modalBodyColor};

    ${({ hasHeader }) => !hasHeader && css`
        border-radius: ${borderRadius} ${borderRadius} 0 0;
    `};
`;

Body.propTypes = {
    alignment: PropTypes.oneOf(Object.values(MODAL_ALIGNMENTS)).isRequired,
    hasHeader: PropTypes.bool.isRequired,
};
