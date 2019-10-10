import styled, { css } from 'styled-components';
import { TEXT_WITH_OPTIONAL_ICON_COLORS, TEXT_WITH_OPTIONAL_ICON_DIRECTIONS } from './TextWithOptionalIcon.consts';
import PropTypes from 'prop-types';

export const Text = styled.p`
    flex: 0 0 auto;
    order: 2;
`;

export const IconWrapper = styled.div`
    order: 1;
    margin: 0 6px 0 0;

    ${({ iconSize }) => iconSize && css`
        font-size: ${iconSize};
    `};

    ${({ iconColor }) => iconColor && css`
        color: ${iconColor};
    `};

    span {
        display: block;
    }
`;

IconWrapper.propTypes = {
    iconColor: PropTypes.oneOf(Object.values(TEXT_WITH_OPTIONAL_ICON_COLORS)),
    iconSize: PropTypes.string,
};

export const StyledTextWithOptionalIcon = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;

    ${({ direction }) => direction === TEXT_WITH_OPTIONAL_ICON_DIRECTIONS.RTL && css`
        ${Text} {
            order: 1;
        }

        ${IconWrapper} {
            order: 2;
            margin: 0 0 0 6px;
        }
    `};
`;

StyledTextWithOptionalIcon.propTypes = {
    direction: PropTypes.oneOf(Object.values(TEXT_WITH_OPTIONAL_ICON_DIRECTIONS)).isRequired,
};
