import PropTypes from 'prop-types';
import styled from 'styled-components';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: ${({ theme }) => theme.spacing(0, 1, 0, 1)};
`;

ButtonWrapper.propTypes = {
    children: PropTypes.node.isRequired,
    theme: themePropTypes,
};

ButtonWrapper.defaultProps = {
    theme: themeBasic,
};
