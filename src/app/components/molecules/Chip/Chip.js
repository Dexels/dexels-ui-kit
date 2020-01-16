import { CHIP_DIRECTIONS, CHIP_EASINGS, CHIP_ICON_SIZES } from './Chip.consts';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledChip } from './Chip.sc';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const Chip = ({
    children,
    className,
    direction,
    iconType,
    iconSize,
    isDisabled,
    isSelected,
    onClick,
    transitionDuration,
    transitionEasing,
    ...rest
}) => (
    <StyledChip
        className={className}
        isDisabled={isDisabled}
        isHoverable={!isDisabled && Boolean(onClick)}
        isSelected={isSelected}
        onClick={isDisabled ? null : onClick}
        transitionDuration={transitionDuration}
        transitionEasing={transitionEasing}
        {...rest}
    >
        <TextWithOptionalIcon direction={direction} iconSize={iconSize} iconType={iconType}>
            {children}
        </TextWithOptionalIcon>
    </StyledChip>
);

Chip.directions = CHIP_DIRECTIONS;
Chip.iconSizes = CHIP_ICON_SIZES;
Chip.iconTypes = TextWithOptionalIcon.iconTypes;
Chip.transitionEasings = CHIP_EASINGS;

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    direction: PropTypes.oneOf(Object.values(Chip.directions)),
    iconSize: PropTypes.oneOf(Object.values(Chip.iconSizes)),
    iconType: PropTypes.oneOf(Object.values(Chip.iconTypes)),
    isDisabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
    transitionDuration: PropTypes.number,
    transitionEasing: PropTypes.oneOf(Object.values(Chip.transitionEasings)),
};

Chip.defaultProps = {
    className: '',
    direction: Chip.directions.LTR,
    iconSize: Chip.iconSizes.MEDIUM,
    iconType: null,
    isDisabled: false,
    isSelected: true,
    onClick: null,
    transitionDuration: 300,
    transitionEasing: Chip.transitionEasings.EASE,
};

export default Chip;
