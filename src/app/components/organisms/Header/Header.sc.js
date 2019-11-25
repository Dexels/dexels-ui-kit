import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)}
    display: flex;
    flex-direction: row;
    background: ${({ isInverted, theme }) => (isInverted ? theme.header.backgroundColor.secondary : theme.header.backgroundColor.primary)};
    height: ${({ theme }) => theme.spacing(6.5)};
    color: ${({ isInverted, theme }) => (isInverted ? theme.colorText.primary : theme.colorTextContrast.primary)};
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
    isInverted: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

StyledHeader.defaultProps = {
    theme: themeBasic,
};

export const NavigationWrapper = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 2)};
`;

NavigationWrapper.propTypes = {
    theme: themePropTypes,
};

NavigationWrapper.defaultProps = {
    theme: themeBasic,
};

export const Title = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body1)}
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: ${({ theme }) => theme.spacing(0, 0, 0, 2)};
`;

Title.propTypes = {
    theme: themePropTypes,
};

Title.defaultProps = {
    theme: themeBasic,
};

export const FunctionalWrapper = styled.div`
    align-self: center;
    margin: 0 0 0 auto;
    padding: ${({ theme }) => theme.spacing(0, 1, 0, 1)};
`;

FunctionalWrapper.propTypes = {
    theme: themePropTypes,
};

FunctionalWrapper.defaultProps = {
    theme: themeBasic,
};
