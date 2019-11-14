import styled, { css } from 'styled-components';
import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import PropTypes from 'prop-types';

export const StyledButtonNavigation = styled.div`
    position: absolute;
    top: ${({ theme }) => theme.spacing(2.5)};

    ${({ isNext }) => isNext && css`
        right: 20px;
        transform: rotate(180deg);
    `}

    ${({ isPrev }) => isPrev && css`
        left: 20px;
    `}
`;

StyledButtonNavigation.propTypes = {
    isNext: PropTypes.bool,
    isPrev: PropTypes.bool,
    theme: themePropTypes,
};

StyledButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
    theme: themeBasic,
};

export default StyledButtonNavigation;