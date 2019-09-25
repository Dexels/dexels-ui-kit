import { IconWrapper, StyledChip, Text } from './Chip.sc';
import { CHIP_DIRECTIONS } from './Chip.consts';
import Icon from '../../atoms/Icon/Icon';
import PropTypes from 'prop-types';
import React from 'react';

const Chip = ({
    children,
    direction,
    iconType,
    isDisabled,
    onClick,
    selected,
}) => (
    <StyledChip
        direction={direction}
        isDisabled={isDisabled}
        onClick={onClick}
        selected={selected}
    >
        {iconType && (
            <IconWrapper>
                <Icon type={iconType} />
            </IconWrapper>
        )}
        <Text>
            {children}
        </Text>
    </StyledChip>
);

Chip.directions = CHIP_DIRECTIONS;
Chip.types = Icon.types;

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Chip.directions)),
    iconType: PropTypes.oneOf(Object.values(Chip.types)),
    isDisabled: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
    selected: PropTypes.bool,
};

Chip.defaultProps = {
    direction: Chip.directions.LTR,
    iconType: null,
    isDisabled: false,
    selected: true,
};

export default Chip;
