import { invertColor } from '../../../utils/invertColor';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledColors = styled.div`
    ${setBoxSizing()};
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    max-width: 1100px;
`;

export const ColorGroup = styled.div`
    display: flex;
    position: relative;
    flex-wrap: nowrap;
    margin: 0 24px 48px;
`;

export const ColorGroupName = styled.p`
    position: absolute;
    top: -24px;
    left: 50%;
    transform: translate3d(-50%, 0, 0);
    margin: 0;
    text-transform: capitalize;
`;

export const Color = styled.div`
    display: flex;
    flex: 0 0 auto;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 8px;
    border: 1px solid ${({ theme }) => theme.colorDark.dark};
    border-radius: 100%;
    background-color: ${({ color }) => color};
    width: 100px;
    height: 100px;
`;

Color.propTypes = {
    color: PropTypes.string.isRequired,
};

export const ColorName = styled.p`
    margin: 0;
    color: ${({ color }) => invertColor(color, true)};
`;

ColorName.propTypes = {
    color: PropTypes.string.isRequired,
};

