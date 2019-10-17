import * as colors from '../../../styles/colors/colors';
import { invertColor } from '../../../utils/invertColor';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledColorWrapper = styled.div`
    ${setBoxSizing()};
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 1100px;
`;

export const StyledColorText = styled.span`
    color: ${({ color }) => invertColor(color, true)};
`;

StyledColorText.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)).isRequired,
};

export const StyledColor = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 8px;
    border: 1px solid #000;
    border-radius: 100%;
    background-color: ${({ color }) => color};
    width: 100px;
    height: 100px;
`;

StyledColor.propTypes = {
    color: PropTypes.oneOf(Object.values(colors)).isRequired,
};
