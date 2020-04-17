import styled, { css, SimpleInterpolation } from 'styled-components';
import { setBoxSizing } from '../../../../styles/mixins/setBoxSizing';
import { themeBasic } from '../../../../styles/theming/themes/basic';

export const StyledPaginator = styled.div`
    ${setBoxSizing()}
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    color: ${({ theme }): string => theme.colorText.primary};
`;

StyledPaginator.defaultProps = {
    theme: themeBasic,
};

interface InputWrapperProps {
    hasPageSizeSelector: boolean;
}

export const InputWrapper = styled.div<InputWrapperProps>`
    margin: 0 0 -1px; /* The -1px is a correction for the input components border */
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};

    ${({ hasPageSizeSelector, theme }): SimpleInterpolation =>
        hasPageSizeSelector &&
        css`
            padding: ${theme.spacing(0, 0, 0, 3)};
        `}
`;

InputWrapper.defaultProps = {
    theme: themeBasic,
};

export const PageSizeSelector = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

PageSizeSelector.defaultProps = {
    theme: themeBasic,
};

export const PageSizeSelectorText = styled.div`
    &:first-of-type {
        padding: ${({ theme }): string => theme.spacing(0, 1)};
    }

    &:last-of-type {
        padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};
        text-transform: lowercase;
    }
`;

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
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};
    text-transform: lowercase;
`;

PagingText.defaultProps = {
    theme: themeBasic,
};

export const PagingButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: ${({ theme }): string => theme.spacing(0, 0, 0, 1)};
`;

PagingButtons.defaultProps = {
    theme: themeBasic,
};
