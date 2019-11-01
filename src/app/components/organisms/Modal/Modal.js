import {
    Body,
    HeaderWrapper,
    StyledModal,
} from './Modal.sc';
import { MODAL_ALIGNMENTS, MODAL_ELEVATIONS } from './Modal.consts';
import Header from '../Header/Header';
import PropTypes from 'prop-types';
import React from 'react';

const Modal = ({
    bodyAlignment,
    children,
    elevation,
    hasMenuOption,
    hasNavigateBackOption,
    headerContents,
    headerTitle,
    menuAction,
    navigateBackAction,
}) => (
    <StyledModal elevation={elevation}>
        {headerContents && (
            <HeaderWrapper>
                <Header
                    elevation={elevation.LEVEL_12}
                    hasMenuOption={hasMenuOption}
                    hasNavigateBackOption={hasNavigateBackOption}
                    isInverted
                    menuAction={menuAction}
                    navigateBackAction={navigateBackAction}
                    title={headerTitle}
                >
                    {headerContents}
                </Header>
            </HeaderWrapper>
        )}
        <Body alignment={bodyAlignment} hasHeader={Boolean(headerContents)}>
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
    hasMenuOption: PropTypes.bool,
    hasNavigateBackOption: PropTypes.bool,
    headerContents: PropTypes.arrayOf(PropTypes.object),
    headerTitle: PropTypes.string,
    menuAction: PropTypes.func,
    navigateBackAction: PropTypes.func,
};

Modal.defaultProps = {
    bodyAlignment: Modal.alignments.CENTER,
    elevation: Modal.elevations.LEVEL_12,
    hasMenuOption: false,
    hasNavigateBackOption: true,
    headerContents: [],
    headerTitle: '',
    menuAction: () => {},
    navigateBackAction: () => {},
};

export default Modal;
