import {
    ButtonWrapper,
    StyledShortcuts,
    Text,
    Wrapper,
} from './Shortcuts.sc';
import React, { ReactNode } from 'react';
import Chip from '../../../../molecules/Chip/Chip';
import { ICON_TYPES } from '../../../../atoms/Icon/Icon.consts';

export interface Shortcut {
    onClick: React.MouseEventHandler;
    text: string | React.ReactNode;
}

interface ShortCutsProps {
    shortcuts: Shortcut[];
    text?: string | ReactNode;
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
                    <Chip iconType={ICON_TYPES.SELECT} onClick={onClick}>
                        {shortcutText}
                    </Chip>
                </ButtonWrapper>
            ))}
        </Wrapper>
    </StyledShortcuts>
);

Shortcuts.defaultProps = {
    text: 'Snelkeuzes',
};

export default Shortcuts;
