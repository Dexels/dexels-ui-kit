import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../../styles/theming/themes/basic';
import { themePropTypes } from '../../../../styles/theming/themes/propTypes';

export const StyledPaginator = styled.div`
    ${setBoxSizing()}
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing(3, 0, 0, 0)};
    color: ${({ theme }) => theme.colorText.primary};
`;

StyledPaginator.propTypes = {
    theme: themePropTypes,
};

StyledPaginator.defaultProps = {
    theme: themeBasic,
};

export const InputWrapper = styled.div`
    margin: 0 0 -1px; /* The -1px is a correction for the input components border */
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};

    ${({ hasPageSizeSelector }) => hasPageSizeSelector && css`
        padding: ${({ theme }) => theme.spacing(0, 0, 0, 3)};
    `}
`;

InputWrapper.propTypes = {
    hasPageSizeSelector: PropTypes.bool.isRequired,
    theme: themePropTypes,
};

InputWrapper.defaultProps = {
    theme: themeBasic,
};

export const PageSizeSelector = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

PageSizeSelector.propTypes = {
    theme: themePropTypes,
};

PageSizeSelector.defaultProps = {
    theme: themeBasic,
};

export const PageSizeSelectorText = styled.div`
    &:first-of-type {
        padding: ${({ theme }) => theme.spacing(0, 1)};
    }

    &:last-of-type {
        padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
        text-transform: lowercase;
    }
`;

PageSizeSelectorText.propTypes = {
    theme: themePropTypes,
};

PageSizeSelectorText.defaultProps = {
    theme: themeBasic,
};

export const Paging = styled.div`
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
    margin: 0 0 0 auto;
`;

export const PagingText = styled.div`
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
    text-transform: lowercase;
`;

PagingText.propTypes = {
    theme: themePropTypes,
};

PagingText.defaultProps = {
    theme: themeBasic,
};

export const PagingButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
`;

PagingButtons.propTypes = {
    theme: themePropTypes,
};

PagingButtons.defaultProps = {
    theme: themeBasic,
};
