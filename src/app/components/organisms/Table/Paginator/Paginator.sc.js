import setBoxSizing from '../../../../styles/mixins/setBoxSizing';
import styled from 'styled-components';

export const StyledPaginator = styled.div`
    ${setBoxSizing()};
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().body2)};
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    padding-top: ${({ theme }) => theme.spacing(3)};
    width: 100%;
    color: ${({ theme }) => theme.colorHeaderText.primary};
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
    padding-left: ${({ theme }) => theme.spacing(1)};
`;

export const PagingButtons = styled.span`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-left: ${({ theme }) => theme.spacing(1)};
`;

