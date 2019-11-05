import setBoxSizing from '../../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-end;
    padding: ${({ theme }) => theme.spacing(3, 0, 0, 0)};
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

export const InputWrapper = styled.div`
    margin: 0 0 -1px;
`;

export const Paging = styled.span`
    display: flex;
    flex-direction: row;
    flex-grow: 2;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
`;

export const PagingText = styled.span`
    align-items: center;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
`;

export const PagingButtons = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding: ${({ theme }) => theme.spacing(0, 0, 0, 1)};
`;

