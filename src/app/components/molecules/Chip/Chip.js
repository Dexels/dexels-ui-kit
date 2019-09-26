import { CHIP_DIRECTIONS } from './Chip.consts';
import Icon from '../../atoms/Icon/Icon';
import IconWrapper from '../../atoms/IconWrapper/IconWrapper';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledChip } from './Chip.sc';
import TextWrapper from '../../atoms/TextWrapper/TextWrapper';

const Chip = ({
    children,
    direction,
    iconType,
    isDisabled,
    isSelected,
    onClick,
}) => (
    <StyledChip
        direction={direction}
        isDisabled={isDisabled}
        isSelected={isSelected}
        onClick={onClick}
    >
        {iconType && (
            <IconWrapper>
                <Icon type={iconType} />
            </IconWrapper>
        )}
        <TextWrapper>
            {children}
        </TextWrapper>
    </StyledChip>
);

Chip.directions = CHIP_DIRECTIONS;
Chip.types = Icon.types;

Chip.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(Object.values(Chip.directions)),
    iconType: PropTypes.oneOf(Object.values(Chip.types)),
    isDisabled: PropTypes.bool,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func.isRequired,
};

Chip.defaultProps = {
    direction: Chip.directions.LTR,
    iconType: null,
    isDisabled: false,
    isSelected: true,
};

export default Chip;
