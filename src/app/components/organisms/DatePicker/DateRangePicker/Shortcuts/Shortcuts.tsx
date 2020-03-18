import {
    ButtonWrapper,
    StyledShortcuts,
    Text,
    Wrapper,
} from './Shortcuts.sc';
import React, { ReactNode } from 'react';
import Chip from '../../../../molecules/Chip/Chip';
import { IconType } from '../../../../../types';

export interface Shortcut {
    onClick: React.MouseEventHandler;
    text: React.ReactNode;
}

interface ShortCutsProps {
    shortcuts: Shortcut[];
    text?: ReactNode;
}

export const Shortcuts: React.FunctionComponent<ShortCutsProps> = ({ shortcuts, text }) => (
    <StyledShortcuts>
        {text && (
            <Text>
                {text}
            </Text>
        )}
        <Wrapper>
            {shortcuts.map(({ onClick, text: shortcutText }, index) => (
                <ButtonWrapper key={typeof shortcutText === 'string' ? shortcutText : index}>
                    <Chip iconType={IconType.SELECT} onClick={onClick}>
                        {shortcutText}
                    </Chip>
                </ButtonWrapper>
            ))}
        </Wrapper>
    </StyledShortcuts>
);

export default Shortcuts;
