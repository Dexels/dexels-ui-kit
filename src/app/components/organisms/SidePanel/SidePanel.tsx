import { Easing, SidePanelSize } from '../../../types';
import { HeaderWrapper, StyledSidePanel } from './SidePanel.sc';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { ButtonIconProps } from '../../molecules/ButtonIcon/ButtonIcon';
import Header from '../../molecules/Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';

export interface SidePanelProps {
    buttons?: Omit<ButtonIconProps, 'isInverted'>[];
    children?: ReactNode;
    className?: string;
    isModalSidePanel?: boolean; // When used within a modal, then z-index needs to be handled correctly
    isVisible: boolean;
    onBack?: MouseEventHandler;
    options?: ReactNode;
    size?: SidePanelSize;
    title: ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const SidePanel: FunctionComponent<SidePanelProps> = ({
    buttons,
    children,
    className,
    isModalSidePanel = false,
    isVisible = false,
    options,
    size = SidePanelSize.MEDIUM,
    title,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
}) => (
    <>
        <Overlay isModalSidePanel={isModalSidePanel} isVisible={isVisible} />
        <StyledSidePanel
            className={className}
            isModalSidePanel={isModalSidePanel}
            isVisible={isVisible}
            size={size}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <HeaderWrapper>
                <Header buttons={buttons} isInverted title={title}>
                    {options}
                </Header>
            </HeaderWrapper>
            {children}
        </StyledSidePanel>
    </>
);

export default SidePanel;
