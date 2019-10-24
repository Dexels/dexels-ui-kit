import { CARD_ELEVATIONS } from '../../atoms/Card/Card.consts';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledCardNoResults = styled.div`
    ${setBoxSizing()};
    ${({ elevation }) => getElevation(elevation)};
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    background-color: transparent;
    padding: ${({ theme }) => theme.spacing(3)};
`;

StyledCardNoResults.propTypes = {
    elevation: PropTypes.oneOf(Object.values(CARD_ELEVATIONS)).isRequired,
};

export const Header = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles.h1)};
    margin: 0 0 16px;
    color: ${({ theme }) => theme.colorPrimary.dark};
`;

export const Title = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles.h3)};
    margin: 4px 4px 4px 0;
    color: ${({ theme }) => theme.colorSecondary.dark};
`;

export const Item = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles.body1)};
    margin: 0 0 4px;
    color: ${({ theme }) => theme.colorDark.main};
`;

export const Left = styled.div`
    flex: 0 0 auto;
    margin-top: 4px; /* Correction for line-height Title element */
    width: 48px;
`;

export const IconWrapper = styled.div`
    color: ${({ theme }) => theme.colorPrimary.dark};
    font-size: 30px; /* @TODO: this should be something like theme.availableTextStyles.icon1  */

    span {
        display: block;
    }
`;

export const Right = styled.div`
    flex: 1 1 auto;
`;
