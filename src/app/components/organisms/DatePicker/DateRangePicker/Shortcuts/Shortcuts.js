import {
    ButtonWrapper,
    StyledShortcuts,
    Text,
    Wrapper,
} from './Shortcuts.sc';
import Chip from '../../../../molecules/Chip/Chip';
import { ICON_TYPES } from '../../../../atoms/Icon/Icon.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Shortcuts = ({ shortcuts, text }) => (
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

Shortcuts.propTypes = {
    shortcuts: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        text: PropTypes.node.isRequired,
    })).isRequired,
    text: PropTypes.node,
};

Shortcuts.defaultProps = {
    text: 'Snelkeuzes',
};

export default Shortcuts;
