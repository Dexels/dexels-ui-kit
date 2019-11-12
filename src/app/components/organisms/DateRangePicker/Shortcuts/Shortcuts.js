import {
    ButtonWrapper,
    StyledShortcuts,
    Text,
} from './Shortcuts.sc';
import Chip from '../../../molecules/Chip/Chip';
import PropTypes from 'prop-types';
import React from 'react';

const Shortcuts = ({ shortCuts, text }) => (
    <StyledShortcuts>
        <Text>
            {text}
        </Text>
        {shortCuts.map(({ onClick, text: shortcutText }) => (
            <ButtonWrapper key={shortcutText}>
                <Chip onClick={onClick}>
                    {shortcutText}
                </Chip>
            </ButtonWrapper>
        ))}
    </StyledShortcuts>
);

Shortcuts.propTypes = {
    shortCuts: PropTypes.arrayOf(PropTypes.shape({
        onClick: PropTypes.func.isRequired,
        text: PropTypes.string.isRequired,
    })).isRequired,
    text: PropTypes.string,
};

Shortcuts.defaultProps = {
    text: 'Snelkeuzes',
};

export default Shortcuts;
