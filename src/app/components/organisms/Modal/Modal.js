import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import { MODAL_ALIGNMENTS, MODAL_ELEVATIONS } from './Modal.consts';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    bodyAlignment,
    children,
    elevation,
    header,
}) => (
    <StyledModal elevation={elevation}>
        {header && (
            <HeaderWrapper>
                {header}
            </HeaderWrapper>
        )}
        <Body alignment={bodyAlignment} hasHeader={Boolean(header)}>
            {children}
        </Body>
    </StyledModal>
);

Modal.alignments = MODAL_ALIGNMENTS;
Modal.elevations = MODAL_ELEVATIONS;

Modal.propTypes = {
    bodyAlignment: PropTypes.oneOf(Object.values(Modal.alignments)),
    children: PropTypes.node.isRequired,
    elevation: PropTypes.oneOf(Object.values(Modal.elevations)),
    header: PropTypes.node,
};

Modal.defaultProps = {
    bodyAlignment: Modal.alignments.CENTER,
    elevation: Modal.elevations.LEVEL_12,
    header: null,
};

export default Modal;
