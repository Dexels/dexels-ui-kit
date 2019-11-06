import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import setBoxSizing from '../../../../styles/mixins/setBoxSizing';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing(3, 0, 0, 0)};
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

export const InputWrapper = styled.div`
    margin: 0 0 -1px; /* The -1px is a correction for the input components border */
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};

    ${({ hasPageSizeSelector }) => hasPageSizeSelector && css`
        padding: ${({ theme }) => theme.spacing(0, 0, 0, 3)};
    `}
`;

InputWrapper.propTypes = {
    hasPageSizeSelector: PropTypes.bool.isRequired,
};

export const PageSizeSelector = styled.div`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().caption)};
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
`;

export const PageSizeSelectorText = styled.div`
    &:first-of-type {
        padding: ${({ theme }) => theme.spacing(0, 1)};
    }

    &:last-of-type {
        padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
        text-transform: lowercase;
    }
`;

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

export const PagingButtons = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
`;

