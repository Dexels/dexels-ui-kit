import { boolean, number, select, text } from '@storybook/addon-knobs';
import { ButtonSize, ButtonVariant, Easing, IconType, ModalSize } from '../../../types';
import moment, { Moment } from 'moment';
import React, { FunctionComponent, useState } from 'react';
import { action } from '@storybook/addon-actions';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import { EditableInformation } from '../EditableInformation/EditableInformation';
import { editableInformationData } from '../EditableInformation/mockup/editableInformationData';
import Modal from './Modal';
import { SingleDatePicker } from '../DatePicker/SingleDatePicker/SingleDatePicker';

export default { title: 'organisms/Modal' };

const functionalItems = [
    <ButtonIcon iconType={IconType.PLUS} key={1} onClick={action('On buttonicon PLUS')} />,
    <ButtonIcon iconType={IconType.SEARCH} key={2} onClick={action('On buttonicon SEARCH')} />,
    <ButtonIcon iconType={IconType.SHARE} key={3} onClick={action('On buttonicon SHARE')} />,
    <ButtonIcon iconType={IconType.GEAR} key={4} onClick={action('On buttonicon GEAR')} />,
    <ButtonIcon iconType={IconType.ROUND_HELP} key={5} onClick={action('On buttonicon ROUNDHELP')} />,
    <Button iconType={IconType.ROUND_INFO} key={6} onClick={action('On button ROUNDINFO 1')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
    <Button iconType={IconType.ROUND_INFO} key={7} onClick={action('On button ROUNDINFO 2')} size={ButtonSize.SMALL}>
        {'label'}
    </Button>,
];

export const Configurable: FunctionComponent = () => (
    <Modal isVisible onBack={action('On back')} options={functionalItems} title={text('Header title', 'Heading')}>
        {text('Body', 'Some body text')}
    </Modal>
);

export const ConfigurableModal: FunctionComponent = () => {
    const [date, setDate] = useState<Moment | null>(moment());
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [wrapperElementRef, setWrapperElementRef] = useState<HTMLDivElement | null>(null);

    return (
        <>
            <Button
                onClick={(): void => {
                    action('On back');
                    setIsVisible(true);
                }}
                variant={ButtonVariant.FILLED}
            >
                {isVisible ? 'MODAL IS SHOWING' : 'SHOW MODAL'}
            </Button>
            <Modal
                isScrollable={boolean('isScrollable', true)}
                isVisible={isVisible}
                onBack={(): void => {
                    action('On back');
                    setIsVisible(false);
                }}
                onBackIconType={select('OnBack icon type', IconType, undefined)}
                options={functionalItems}
                size={select('Size', ModalSize, ModalSize.XLARGE)}
                title={text('Header title', 'Heading')}
                transitionDuration={number('Transition duration', 500)}
                transitionEasing={select('Transition type', Easing, Easing.EASE)}
            >
                <div
                    className="Parent"
                    ref={setWrapperElementRef}
                    style={{
                        marginLeft: 'auto',
                        width: '100%',
                    }}
                >
                    <SingleDatePicker
                        date={date}
                        id="datepicker"
                        isFocused={isFocused}
                        onDateChange={(newDate): void => {
                            setDate(newDate);
                        }}
                        onFocusChange={({ focused }): void => {
                            setIsFocused(Boolean(focused));
                        }}
                        parentContainer={wrapperElementRef || undefined}
                        placeholder={'Selecteer je datum'}
                    />
                    <EditableInformation
                        amountOfColumns={select('Columns', [1, 2, 3], 2)}
                        data={editableInformationData()}
                        iconType={select('Icon Type', IconType, IconType.CALENDAR)}
                        isButtonDisabled={boolean('Is button disabled', false)}
                        isDisabled={boolean('Is disabled', false)}
                        isEditing
                        isLoading={boolean('Is loading', false)}
                        title={text('Title', 'Information')}
                    />
                </div>
            </Modal>
        </>
    );
};
