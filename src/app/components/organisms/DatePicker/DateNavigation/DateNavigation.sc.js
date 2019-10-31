import styled from 'styled-components';

export const StyledDateNavigation = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

export const DropdownWrapper = styled.div`
    flex: 0 1 auto;
    width: 50%;

    &:first-of-type {
        margin: ${({ theme }) => theme.spacing(0, 0.75, 0, 0)};
    }

    &:last-of-type {
        margin: ${({ theme }) => theme.spacing(0, 0, 0, 0.75)};
    }
`;

export const Date = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h3)};
    margin: 0;
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;
