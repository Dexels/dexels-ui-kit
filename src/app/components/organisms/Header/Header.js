import {
    ButtonContainer,
    ButtonsWrapper,
    LeftContainer,
    RightContainer,
    StyledHeader,
    TitleWrapper,
} from './Header.sc';
import { ELEVATIONS } from '../../../utils/constants';
import Label from '../../atoms/Label/Label';
import PropTypes from 'prop-types';
import React from 'react';

const Header = ({
    elevation,
    leftSideIcons,
    rightSideButtons,
    rightSideIcons,
    title,
}) => (
    <StyledHeader elevation={elevation}>
        <LeftContainer>
            {leftSideIcons.length > 0 && leftSideIcons.map((leftSideIcon) => (
                leftSideIcon
            ))}
            <TitleWrapper>
                <Label>
                    {title}
                </Label>
            </TitleWrapper>
        </LeftContainer>
        <RightContainer>
            {rightSideIcons.length > 0 && rightSideIcons.map((rightSideIcon) => (
                rightSideIcon
            ))}
            <ButtonsWrapper>
                {rightSideButtons.length > 0 && rightSideButtons.map((rightSideButton) => (
                    <ButtonContainer key={rightSideButton.key}>
                        {rightSideButton}
                    </ButtonContainer>
                ))}
            </ButtonsWrapper>
        </RightContainer>
    </StyledHeader>
);

Header.elevations = ELEVATIONS;

Header.propTypes = {
    elevation: PropTypes.oneOf(Object.values(Header.elevations)),
    leftSideIcons: PropTypes.arrayOf(PropTypes.object),
    rightSideButtons: PropTypes.arrayOf(PropTypes.object),
    rightSideIcons: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
};

Header.defaultProps = {
    elevation: Header.elevations.LEVEL_1,
    leftSideIcons: [],
    rightSideButtons: [],
    rightSideIcons: [],
};

export default Header;
