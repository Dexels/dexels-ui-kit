import { BUTTON_ICON_SIZES } from '../../../molecules/ButtonIcon/ButtonIcon.consts';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import Dropdown from '../../../molecules/Dropdown/Dropdown';
import PropTypes from 'prop-types';
import React from 'react';
import { StyledPaginator } from './Paginator.sc';

const Paginator = ({
    hasAllPagingButtons,
    hasGoToPage,
    hasPageSelector,
    instance,
    localizedTexts,
    pageSizes,
}) => (
    <>
        {/* {console.log('texts', localizedTexts)} */}

        <StyledPaginator>
            <span>
                {localizedTexts.page}
                {' '}
                <strong>
                    {instance.pageIndex + 1}
                    {' '}
                    {localizedTexts.pageOf.toLowerCase()}
                    {' '}
                    {instance.pageOptions.length}
                </strong>
                {' '}
            </span>
            {hasGoToPage
            && (
                <span>
                    {'| '}
                    {localizedTexts.pageGoto}
                    {': '}
                    <input
                        defaultValue={instance.pageIndex + 1}
                        onChange={(e) => {
                            const page = e.target.value ? Number(e.target.value) - 1 : 0;
                            instance.gotoPage(page);
                        }}
                        style={{ width: '100px' }}
                        type="number"
                    />
                </span>
            )}
            {hasPageSelector
            && (
                <Dropdown
                    onChange={(e) => {
                        instance.setPageSize(Number(e.target.value));
                    }}
                    value={instance.pageSize}
                >
                    {pageSizes.map((pageSize) => (
                        <option key={pageSize} value={pageSize}>
                            {localizedTexts.pageShow}
                            {' '}
                            {pageSize}
                        </option>
                    ))}
                </Dropdown>
            )}
            {/* {hasAllPagingButtons
            && <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} onClick={() => onGoToPage(1)} size={BUTTON_ICON_SIZES.XL} />}
            <ButtonIcon iconType={ButtonIcon.types.CHEVRONLEFT} onClick={onPreviousPage} size={BUTTON_ICON_SIZES.XL} />
            <ButtonIcon iconType={ButtonIcon.types.CHEVRONRIGHT} onClick={onNextPage} size={BUTTON_ICON_SIZES.XL} />
            {hasAllPagingButtons
            && <ButtonIcon iconType={ButtonIcon.types.CHEVRONRIGHT} onClick={() => onGoToPage(2)} size={BUTTON_ICON_SIZES.XL} />} */}
        </StyledPaginator>
    </>
);

Paginator.propTypes = {
    hasAllPagingButtons: PropTypes.bool,
    hasGoToPage: PropTypes.bool,
    hasPageSelector: PropTypes.bool,
    instance: PropTypes.shape(PropTypes.node.isRequired).isRequired,
    localizedTexts: PropTypes.shape({
        page: PropTypes.string,
        pageGoto: PropTypes.string,
        pageOf: PropTypes.string,
        pageShow: PropTypes.string,
    }).isRequired,
    pageSizes: PropTypes.array.isRequired,
};

Paginator.defaultProps = {
    hasAllPagingButtons: false,
    hasGoToPage: false,
    hasPageSelector: false,
};

export default Paginator;
