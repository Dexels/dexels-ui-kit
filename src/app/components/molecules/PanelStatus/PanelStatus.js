import {
    FunctionalWrapper,
    StyledHeader,
    Title,
} from './PanelStatus.sc';
import CardStatus from '../CardStatus/CardStatus';
import { PANEL_STATUS_ICON_TYPES } from './PanelStatus.consts';
import PropTypes from 'prop-types';
import React from 'react';
import StatusIndicator from '../../atoms/StatusIndicator/StatusIndicator';
import TextWithOptionalIcon from '../TextWithOptionalIcon/TextWithOptionalIcon';

const PanelStatus = ({
    children,
    elevation,
    iconType,
    options,
    status,
    title,
}) => (
    <>
        <StyledHeader>
            <Title>
                <TextWithOptionalIcon iconType={iconType}>
                    {title}
                </TextWithOptionalIcon>
            </Title>
            <FunctionalWrapper>
                {options}
            </FunctionalWrapper>
        </StyledHeader>
        <CardStatus
            elevation={elevation}
            placement={CardStatus.placements.TOP}
            size={StatusIndicator.defaultProps.size}
            status={status}
        >
            {children}
        </CardStatus>
    </>
);

PanelStatus.iconTypes = PANEL_STATUS_ICON_TYPES;

PanelStatus.propTypes = {
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(CardStatus.elevations)),
    iconType: PropTypes.oneOf(Object.values(PanelStatus.iconTypes)),
    options: PropTypes.node,
    status: PropTypes.oneOf(Object.values(CardStatus.statuses)),
    title: PropTypes.node.isRequired,
};

PanelStatus.defaultProps = {
    elevation: CardStatus.defaultProps.elevation,
    iconType: null,
    options: null,
    status: CardStatus.defaultProps.status,
};

export default PanelStatus;
