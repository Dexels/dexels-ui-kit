import { BUTTON_ICON_SIZES } from '../../../molecules/ButtonIcon/ButtonIcon.consts';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledPaginator } from './Paginator.sc';

const Paginator = ({
    currentPage,
    hasAllPagingButtons,
    hasGoToPage,
    onGoToPage,
    onNextPage,
    onPreviousPage,
}) => (
    <StyledPaginator
        currentPage={currentPage}
        hasGoToPage={hasGoToPage}
        onGoToPage={onGoToPage}
        onNextPage={onNextPage}
        onPreviousPage={onPreviousPage}
    >
        {/* {hasGoToPage
        &&
        } */}
        {hasAllPagingButtons
        && <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} onClick={() => onGoToPage(1)} size={BUTTON_ICON_SIZES.XL} />}
        <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} onClick={onPreviousPage} size={BUTTON_ICON_SIZES.XL} />
        <ButtonIcon iconType={ButtonIcon.types.CHEVRONRIGHT} onClick={onNextPage} size={BUTTON_ICON_SIZES.XL} />
        {hasAllPagingButtons
        && <ButtonIcon iconType={ButtonIcon.types.CHEVRONRIGHT} onClick={() => onGoToPage(2)} size={BUTTON_ICON_SIZES.XL} />}
    </StyledPaginator>
);

Paginator.propTypes = {
    currentPage: PropTypes.number.isRequired,
    hasAllPagingButtons: PropTypes.bool,
    hasGoToPage: PropTypes.bool,
    onGoToPage: PropTypes.func,
    onNextPage: PropTypes.func.isRequired,
    onPreviousPage: PropTypes.func.isRequired,
};

Paginator.defaultProps = {
    hasAllPagingButtons: false,
    hasGoToPage: false,
    onGoToPage: null,
};

export default Paginator;
