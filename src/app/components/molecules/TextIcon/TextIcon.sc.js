import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import { TEXT_ICON_SIZES } from './TextIcon.consts';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/themePropTypes';

export const StyledTextIcon = styled.div`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)}
    display: grid;
    border: 0;
    border-radius: 100%;
    background-color: ${({ theme }) => theme.shades.eight};
    color: ${({ theme }) => theme.shades.four};

    ${({ size }) => size === TEXT_ICON_SIZES.SMALL && css`
        width: ${({ theme }) => theme.spacing(2.25)};
        height: ${({ theme }) => theme.spacing(2.25)};
        line-height: ${({ theme }) => theme.spacing(1.75)};
        font-size: 10px;
    `}

    ${({ size }) => size === TEXT_ICON_SIZES.MEDIUM && css`
        width: ${({ theme }) => theme.spacing(2.5)};
        height: ${({ theme }) => theme.spacing(2.5)};
        line-height: ${({ theme }) => theme.spacing(2)};
        font-size: 12px;
    `}

    ${({ size }) => size === TEXT_ICON_SIZES.LARGE && css`
        width: ${({ theme }) => theme.spacing(3)};
        height: ${({ theme }) => theme.spacing(3)};
        line-height: ${({ theme }) => theme.spacing(2.5)};
        font-size: 16px;
    `}

    ${({ size }) => size === TEXT_ICON_SIZES.XLARGE && css`
        width: ${({ theme }) => theme.spacing(3.5)};
        height: ${({ theme }) => theme.spacing(3.5)};
        line-height: ${({ theme }) => theme.spacing(3)};
        font-size: 20px;
    `}
`;

StyledTextIcon.propTypes = {
    size: PropTypes.oneOf(Object.values(TEXT_ICON_SIZES)).isRequired,
    theme: themePropTypes,
};

StyledTextIcon.defaultProps = {
    theme: themeBasic,
};

export default StyledTextIcon;
