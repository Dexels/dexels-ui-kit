import { themeBasic, themePropTypes } from '../../../../styles/theming/themes/basic';
import styled from 'styled-components';

export const StyledNavigation = styled.div`
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

DropdownWrapper.propTypes = {
    theme: themePropTypes,
};

DropdownWrapper.defaultProps = {
    theme: themeBasic,
};

export const CurrentDate = styled.p`
    ${({ theme }) => theme.textStyling(theme.availableTextStyles().h2)}
    margin: 0;
    text-transform: capitalize;
    color: ${({ theme }) => theme.colorHeaderText.primary};
`;

CurrentDate.propTypes = {
    theme: themePropTypes,
};

CurrentDate.defaultProps = {
    theme: themeBasic,
};