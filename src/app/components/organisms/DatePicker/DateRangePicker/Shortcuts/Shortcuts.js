import {
    ButtonWrapper,
    StyledShortcuts,
    Text,
} from './Shortcuts.sc';
import Chip from '../../../../molecules/Chip/Chip';
import PropTypes from 'prop-types';
import React from 'react';

const Shortcuts = ({ shortcuts, text }) => (
    <StyledShortcuts>
        {text && (
            <Text>
                {text}
            </Text>
        )}
        {shortcuts.map(({ onClick, text: shortcutText }) => (
            <ButtonWrapper key={shortcutText}>
                <Chip onClick={onClick}>
                    {shortcutText}
                </Chip>
            </ButtonWrapper>
        ))}
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
