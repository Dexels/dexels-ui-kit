import { Body, HeaderWrapper, StyledSidePanel } from './SidePanel.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { ButtonIconProps } from '../../molecules/ButtonIcon/ButtonIcon';
import { Easing } from '../../../types';
import Header from '../../molecules/Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';

export interface SidePanelProps {
    buttons?: Omit<ButtonIconProps, 'isInverted'>[];
    children?: ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: MouseEventHandler;
    options?: ReactNode;
    title: ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const SidePanel: FunctionComponent<SidePanelProps> = ({
    buttons,
    children,
    className,
    isVisible = false,
    options,
    title,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
}) => (
    <>
        <Overlay isVisible={isVisible} />
        <StyledSidePanel
            className={className}
            isVisible={isVisible}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <HeaderWrapper>
                <Header buttons={buttons} isInverted title={title}>
                    {options}
                </Header>
            </HeaderWrapper>
            <Body>{children}</Body>
        </StyledSidePanel>
    </>
);

export default SidePanel;
