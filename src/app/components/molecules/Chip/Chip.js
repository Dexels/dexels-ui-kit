import { CHIP_DIRECTIONS, CHIP_EASINGS } from './Chip.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledChip } from './Chip.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const Chip = ({
    children,
    direction,
    iconType,
    isDisabled,
    isSelected,
    onClick,
    transitionDuration,
    transitionEasing,
}) => (
    <StyledChip
        isDisabled={isDisabled}
        isSelected={isSelected}
        onClick={onClick}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
    >
        <TextWithOptionalIcon direction={direction} iconType={iconType}>
            {children}
        </TextWithOptionalIcon>
    </StyledChip>
);

Chip.directions = CHIP_DIRECTIONS;
Chip.iconTypes = TextWithOptionalIcon.iconTypes;
Chip.transitionEasings = CHIP_EASINGS;

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Chip.directions)),
    iconType: PropTypes.oneOf(Object.values(Chip.iconTypes)),
    isDisabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Chip.transitionEasings)),
};

Chip.defaultProps = {
    direction: Chip.directions.LTR,
    iconType: null,
    isDisabled: false,
    isSelected: true,
    transitionDuration: 300,
    transitionEasing: Chip.transitionEasings.EASE,
};

export default Chip;
