import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeBasic } from '../../../app/styles/theming/themes/basic';
import { themePropTypes } from '../../../app/styles/theming/themes/propTypes';

export const StyledWrapper = styled.div`
    background-color: ${({ theme }) => theme.background.primary};
    padding: ${({ theme }) => theme.spacing(3)};
    min-height: 100vh;
`;

StyledWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    theme: themePropTypes,
};

StyledWrapper.defaultProps = {
    theme: themeBasic,
};

export default StyledWrapper;
