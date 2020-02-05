import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import { IconType } from '../../../../types';
import React from 'react';
import { StyledButtonNavigation } from './ButtonNavigation.sc';

interface ButtonNavigationProps {
    isNext?: boolean;
    isPrev?: boolean;
}

const ButtonNavigation: React.FunctionComponent<ButtonNavigationProps> = ({ isNext, isPrev }) => (
    <StyledButtonNavigation isNext={isNext} isPrev={isPrev}>
        <ButtonIcon iconType={IconType.CHEVRONLEFT} />
    </StyledButtonNavigation>
);

ButtonNavigation.defaultProps = {
    isNext: false,
    isPrev: false,
};

export default ButtonNavigation;
