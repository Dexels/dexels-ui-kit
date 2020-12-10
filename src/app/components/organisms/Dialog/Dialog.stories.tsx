import { boolean, number, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, Direction, Easing, Elevation, IconType, InputType, Status } from '../../../types';
import Dialog, { DialogProps } from './Dialog';
import React, { FunctionComponent, useState } from 'react';
import Button from '../../molecules/Button/Button';
import { DialogButtonClosePosition } from './types';
import Input from '../../molecules/Input/Input';
import { parseInputValue } from '../../../utils/functions/parseInputValue';

export default { title: 'organisms/Dialog' };

const ConfigurableDialog: FunctionComponent<DialogProps> = ({
    children,
    footerButtons,
    footerText,
    iconType,
    isVisible,
    onClose,
    status,
    text: textProp,
    title: titleProp,
    titleIcon,
}) => (
    <Dialog
        buttonClosePosition={select('ButtonClose position', DialogButtonClosePosition, DialogButtonClosePosition.LEFT)}
        elevation={select('Elevation', Elevation, Elevation.LEVEL_12)}
        footerButtons={footerButtons}
        footerText={footerText}
        hasBodyPadding={boolean('Has body padding', true)}
        hasButtonClose={boolean('Show close button', true)}
        hasHeaderPadding={boolean('Has header padding', true)}
        hasOverlay={boolean('Has overlay', true)}
        header={text('Header', '')}
        iconType={iconType}
        isVisible={isVisible}
        onClose={onClose}
        status={status}
        text={textProp}
        title={titleProp}
        titleIcon={titleIcon}
        transitionDuration={number('Transition duration', 300)}
        transitionEasing={select('Transition type', Easing, Easing.EASE)}
    >
        {children}
    </Dialog>
);

export const Configurable: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={(): void => {
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'Dialog is showing' : 'Show dialog'}
            </Button>
            <ConfigurableDialog
                footerButtons={[
                    {
                        children: 'Cancel',
                        iconType: IconType.CROSS,
                        onClick: (): void => {
                            setIsVisible(false);
                        },
                        size: ButtonSize.SMALL,
                        variant: ButtonVariant.TEXT_ONLY,
                    },
                    {
                        children: 'Confirm',
                        iconType: IconType.CHECK,
                        onClick: (): void => {
                            setIsVisible(false);
                        },
                        size: ButtonSize.SMALL,
                    },
                ]}
                isVisible={isVisible}
                onClose={(): void => {
                    setIsVisible(false);
                }}
                text={text(
                    'Text',
                    'You can put all kinds of text in here. From short ones to long ones, from boring ones to fun ones.'
                )}
                title={text('Title', 'We should title this')}
                titleIcon={select('Title icon type', IconType, IconType.FILEVIDEO)}
            />
        </>
    );
};

export const ConfigurableAlert: FunctionComponent = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={(): void => {
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'Dialog is showing' : 'Show dialog'}
            </Button>
            <ConfigurableDialog
                footerButtons={[
                    {
                        children: 'Save the world',
                        direction: Direction.RTL,
                        iconType: IconType.ARROWRIGHT,
                        onClick: (): void => {
                            setIsVisible(false);
                        },
                        size: ButtonSize.SMALL,
                    },
                ]}
                footerText={text('Footer text', 'We need you..')}
                iconType={select('Icon type', IconType, IconType.ROUND_ALERT)}
                isVisible={isVisible}
                onClose={(): void => {
                    setIsVisible(false);
                }}
                status={select('Status', Status, Status.ALERT)}
                text={text('Text', 'Help, the world is going to end!')}
                title={text('Title', 'We should title this')}
                titleIcon={select('Title icon type', IconType, IconType.FILEVIDEO)}
            />
        </>
    );
};

export const ConfigurableAlertWithContent: FunctionComponent = () => {
    const [answer, setAnswer] = useState<number | undefined>(undefined);
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <Button
                onClick={(): void => {
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'Dialog is showing' : 'Show dialog'}
            </Button>
            <ConfigurableDialog
                footerButtons={[
                    {
                        children: 'Back to safety',
                        direction: Direction.RTL,
                        iconType: IconType.ARROWRIGHT,
                        isDisabled: answer !== 4,
                        onClick: (): void => {
                            setIsVisible(false);
                        },
                        size: ButtonSize.SMALL,
                    },
                ]}
                footerText={text('Footer text', 'Hint: its not 3 or 5')}
                iconType={select('Icon type', IconType, IconType.ROUND_ALERT)}
                isVisible={isVisible}
                onClose={(): void => {
                    setIsVisible(false);
                }}
                status={select('Status', Status, Status.ALERT)}
                text="What is 2 + 2?"
                title={text('Title', 'We should title this')}
                titleIcon={select('Title icon type', IconType, IconType.FILEVIDEO)}
            >
                <Input
                    isValid={answer === 4}
                    label="Your answer"
                    max={number('Max', 100)}
                    min={number('Min', 0)}
                    name="an-input-name"
                    onChange={({ currentTarget }): void => {
                        setAnswer(parseInt(parseInputValue(currentTarget), 10));
                    }}
                    type={InputType.NUMBER}
                    value={answer ? answer.toString() : ''}
                />
            </ConfigurableDialog>
        </>
    );
};
