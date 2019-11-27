import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../styles/mixins/setBoxSizing';
import setTruncate from '../../../styles/mixins/setTruncate';
import { TEXT_WITH_OPTIONAL_ICON_DIRECTIONS } from './TextWithOptionalIcon.consts';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../styles/theming/themes/propTypes';

export const Text = styled.p`
    ${setBoxSizing()}
    ${setTruncate()}
    flex: 0 1 auto;
    order: 2;
    margin: 0;
    word-break: break-word;

    ${({ isCapitalized }) => isCapitalized && css`
        &::first-letter {
            text-transform: uppercase;
        }
    `}
`;

Text.propTypes = {
    isCapitalized: PropTypes.bool.isRequired,
};

export const IconWrapper = styled.div`
    order: 1;
    margin: ${({ theme }) => theme.spacing(0, 0.75, 0, 0)};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    theme: themePropTypes,
};

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const StyledTextWithOptionalIcon = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    ${({ direction, theme }) => direction === TEXT_WITH_OPTIONAL_ICON_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconWrapper} {
            order: 2;
            margin: ${theme.spacing(0, 0, 0, 0.75)};
        }
    `}
`;

StyledTextWithOptionalIcon.propTypes = {
    direction: PropTypes.oneOf(Object.values(TEXT_WITH_OPTIONAL_ICON_DIRECTIONS)).isRequired,
    theme: themePropTypes,
};

StyledTextWithOptionalIcon.defaultProps = {
    theme: themeBasic,
};
