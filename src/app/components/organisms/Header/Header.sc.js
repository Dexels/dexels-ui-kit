import defaultTheme from '../../../styles/theme/theme';
import { ELEVATIONS } from '../../../utils/constants';
import getElevation from '../../../styles/mixins/getElevation';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import validateThemePropTypes from '../../../utils/validators/validateThemePropTypes';

export const ButtonContainer = styled.div`
    margin-right: 15px;
`;

ButtonContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonContainer.defaultProps = {
    theme: defaultTheme,
};

export const ButtonsWrapper = styled.div`
    align-self: center;
    height:30px;
    display: flex;
    flex-direction:row;
`;

ButtonsWrapper.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

ButtonsWrapper.defaultProps = {
    theme: defaultTheme,
};

export const TitleWrapper = styled.div`
    color: ${({ theme }) => theme.header.headerColor};
    margin:auto;
`;

TitleWrapper.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

TitleWrapper.defaultProps = {
    theme: defaultTheme,
};

export const RightContainer = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    align-self: center;
    color: ${({ theme }) => theme.header.headerColor};
    display: flex;
    flex-wrap: nowrap;
    height: 40px;
    margin-inline-start: auto;
`;

RightContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

RightContainer.defaultProps = {
    theme: defaultTheme,
};

export const LeftContainer = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    align-self: center;
    color: ${({ theme }) => theme.header.headerColor};
    display: flex;
    flex-wrap: nowrap;
    height: 40px;
`;

LeftContainer.propTypes = {
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

LeftContainer.defaultProps = {
    theme: defaultTheme,
};

export const StyledHeader = styled.div`
    ${({ elevation }) => getElevation(elevation)};
    /* background: ${({ theme }) => theme.header.headerBackgroundColor}; */
    color: ${({ theme }) => theme.header.headerColor};
    display: flex;
    flex-direction:row;
    height: 52px;
`;

StyledHeader.propTypes = {
    elevation: PropTypes.oneOf(Object.values(ELEVATIONS)).isRequired,
    theme: PropTypes.shape({
        header: PropTypes.objectOf((propValue, key, componentName) => (
            validateThemePropTypes(propValue, key, componentName)
        )).isRequired,
    }),
};

StyledHeader.defaultProps = {
    theme: defaultTheme,
};
