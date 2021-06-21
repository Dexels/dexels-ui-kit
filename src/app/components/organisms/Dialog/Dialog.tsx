import {
    Body,
    ButtonClose,
    ChildrenWrapper,
    Content,
    Header,
    IconWrapper,
    OverlayWrapper,
    StyledDialog,
    StyledTextWithOptionalIcon,
    Text,
    Wrapper,
} from './Dialog.sc';
import { DialogButtonClosePosition, IconPlacement } from './types';
import DialogFooter, { DialogFooterProps } from '../../molecules/DialogFooter/DialogFooter';
import { Easing, Elevation, IconType, Status } from '../../../types';
import { IconCustomizable, IconCustomizableSize } from '../../molecules/IconCustomizable';
import React, { FunctionComponent, MouseEventHandler, ReactNode } from 'react';
import { IconProps } from '../../atoms/Icon/Icon';
import { isEmpty } from '../../../utils/functions/validateFunctions';
import Overlay from '../../molecules/Overlay/Overlay';

export interface DialogProps {
    buttonClosePosition?: DialogButtonClosePosition;
    children?: ReactNode;
    className?: string;
    elevation?: Elevation;
    footerButtons: DialogFooterProps['buttons'];
    footerText?: DialogFooterProps['text'];
    hasBodyPadding?: boolean;
    hasButtonClose?: boolean;
    hasHeaderPadding?: boolean;
    hasOverlay?: boolean;
    header?: ReactNode;
    iconPlacement?: IconPlacement;
    iconType?: IconProps['type'] /* IconType will be used by title and inside content */;
    isScrollable?: boolean;
    isVisible: boolean;
    onClose?: MouseEventHandler;
    status?: Status;
    text?: ReactNode;
    title?: ReactNode;
    transitionDuration?: number;
    transitionEasing?: Easing;
}

export const Dialog: FunctionComponent<DialogProps> = ({
    buttonClosePosition = DialogButtonClosePosition.LEFT,
    children,
    className,
    elevation = Elevation.LEVEL_12,
    footerButtons,
    footerText,
    hasBodyPadding = true,
    hasButtonClose = true,
    hasHeaderPadding = true,
    hasOverlay = true,
    header,
    iconPlacement = IconPlacement.TOP,
    iconType,
    isScrollable = true,
    isVisible,
    onClose,
    status = Status.DEFAULT,
    text,
    title,
    transitionDuration = 300,
    transitionEasing = Easing.EASE,
}) => (
    <>
        {hasOverlay && (
            <OverlayWrapper isVisible={isVisible}>
                <Overlay isVisible={isVisible} />
            </OverlayWrapper>
        )}
        {hasButtonClose && hasOverlay && isVisible && (
            <ButtonClose onClick={onClose} position={buttonClosePosition}>
                <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={IconType.CROSS} />
            </ButtonClose>
        )}
        <Wrapper
            className={className}
            isScrollable={isScrollable}
            isVisible={isVisible}
            transitionDuration={transitionDuration}
            transitionEasing={transitionEasing}
        >
            <StyledDialog elevation={elevation} isScrollable={isScrollable}>
                {header && <Header hasHeaderPadding={hasHeaderPadding}>{header}</Header>}
                <Body hasBodyPadding={hasBodyPadding} hasBorderRadius={isEmpty(header)} id="DialogBody">
                    {iconType && title && (
                        <StyledTextWithOptionalIcon iconType={iconType}>{title}</StyledTextWithOptionalIcon>
                    )}
                    <Content iconPlacement={iconPlacement} id="DialogContent">
                        {iconType && !title && (
                            <IconWrapper status={status}>
                                <IconCustomizable iconSize={IconCustomizableSize.SIZE32} iconType={iconType} />
                            </IconWrapper>
                        )}
                        {text && <Text id="DialogBodyText">{text}</Text>}
                    </Content>
                    {children && (
                        <ChildrenWrapper
                            hasPaddingLeft={Boolean(iconType) && Boolean(text) && !title}
                            hasPaddingTop={Boolean(iconType) || Boolean(text)}
                        >
                            {children}
                        </ChildrenWrapper>
                    )}
                </Body>
                <DialogFooter buttons={footerButtons} text={footerText} />
            </StyledDialog>
        </Wrapper>
    </>
);

export default Dialog;
