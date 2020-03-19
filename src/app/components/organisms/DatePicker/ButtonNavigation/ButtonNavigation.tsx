import React, { FunctionComponent } from 'react';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import { IconType } from '../../../../types';
import { StyledButtonNavigation } from './ButtonNavigation.sc';

interface ButtonNavigationProps {
    isNext?: boolean;
    isPrev?: boolean;
}

const ButtonNavigation: FunctionComponent<ButtonNavigationProps> = ({ isNext, isPrev }) => (
    <StyledButtonNavigation isNext={isNext} isPrev={isPrev}>
        <ButtonIcon iconType={IconType.CHEVRONLEFT} />
    </StyledButtonNavigation>
);

export default ButtonNavigation;
