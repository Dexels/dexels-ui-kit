import { ButtonSize, ButtonVariant, IconType } from '../../../types';
import React, { FunctionComponent } from 'react';
import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import Button from '../../molecules/Button/Button';
import ButtonIcon from '../../molecules/ButtonIcon/ButtonIcon';
import Toolbar from './Toolbar';

export default { title: 'organisms/Toolbar' };

export const Configurable: FunctionComponent = () => {
    const isInverted = boolean('Is inverted', false);

    return (
        <Toolbar isInverted={isInverted}>
            <ButtonIcon iconType={IconType.PLUS} key={1} onClick={action('On buttonicon PLUS')} />
            <ButtonIcon iconType={IconType.SEARCH} key={2} onClick={action('On buttonicon SEARCH')} />
            <ButtonIcon iconType={IconType.SHARE} key={3} onClick={action('On buttonicon SHARE')} />
            <ButtonIcon iconType={IconType.GEAR} key={4} onClick={action('On buttonicon GEAR')} />
            <ButtonIcon iconType={IconType.ROUNDHELP} key={5} onClick={action('On buttonicon ROUNDHELP')} />
            <Button
                iconType={IconType.ROUNDINFO}
                key={6}
                onClick={action('On buttonicon ROUNDINFO')}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.OUTLINE}
            >
                {'label'}
            </Button>
            <Button
                iconType={IconType.ROUNDINFO}
                key={7}
                onClick={action('On buttonicon ROUNDINFO')}
                size={ButtonSize.SMALL}
                variant={ButtonVariant.OUTLINE}
            >
                {'label'}
            </Button>
        </Toolbar>
    );
};
