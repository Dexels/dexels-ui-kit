import { Body, HeaderWrapper, StyledSidePannel } from './SidePannel.sc';
import { Easing, IconType } from '../../../types';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import Header from '../../molecules/Header/Header';
import Overlay from '../../molecules/Overlay/Overlay';

export interface SidePanelProps {
    children?: ReactNode;
    className?: string;
    isVisible: boolean;
    onBack?: MouseEventHandler;
    options?: ReactNode;
    title: ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

const SidePanel: FunctionComponent<SidePanelProps> = ({
    children,
    className,
    isVisible = false,
    onBack,
    options,
    title,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
}) => (
    <>
        <Overlay isVisible={isVisible} />
        <StyledSidePannel
            className={className}
            isVisible={isVisible}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <HeaderWrapper>
                <Header
                    buttons={[
                        {
                            iconType: IconType.CROSS,
                            onClick: onBack,
                        },
                    ]}
                    isInverted
                    title={title}
                >
                    {options}
                </Header>
            </HeaderWrapper>
            <Body>{children}</Body>
        </StyledSidePannel>
    </>
);

export default SidePanel;
