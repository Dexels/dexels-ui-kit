import { invertColor } from '../../../utils/colorFunctions';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/themePropTypes';

export const StyledColors = styled.div`
    ${setBoxSizing()}
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 80px auto 0;
    max-width: 1200px;
`;

export const ColorGroup = styled.div`
    display: flex;
    position: relative;
    flex: 0 1 auto;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 24px 56px;
`;

export const ColorGroupName = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)}
    position: absolute;
    top: -32px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    margin: 0;
    text-transform: capitalize;
`;

ColorGroupName.propTypes = {
    theme: themePropTypes,
};

ColorGroupName.defaultProps = {
    theme: themeBasic,
};

export const Color = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-direction: column;
    justify-content: center;
    margin: 0 8px 8px;
    border: 1px solid #000;
    border-radius: 100%;
    background-color: ${({ color }) => color};
    width: 100px;
    height: 100px;
`;

Color.propTypes = {
    color: PropTypes.string.isRequired,
};

export const ColorText = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    flex: 0 0 auto;
    margin: 0;
    text-align: center;
    text-transform: capitalize;
    color: ${({ color }) => invertColor(color, true)};
`;

ColorText.propTypes = {
    color: PropTypes.string.isRequired,
};
