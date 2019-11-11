import { ButtonWrapper, StyledFooter } from './Footer.sc';
import Button from '../../../molecules/Button/Button';
import PropTypes from 'prop-types';
import React from 'react';

const Footer = ({
    onConfirm,
    onReset,
    textConfirm,
    textReset,
}) => (
    <StyledFooter>
        {onReset && (
            <ButtonWrapper>
                <Button
                    iconType={Button.iconTypes.CROSS}
                    onClick={onReset}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.TEXT_ONLY}
                >
                    {textReset}
                </Button>
            </ButtonWrapper>
        )}
        {onConfirm && (
            <ButtonWrapper>
                <Button
                    iconType={Button.iconTypes.CHECK}
                    onClick={onConfirm}
                    size={Button.sizes.SMALL}
                    variant={Button.variants.OUTLINE}
                >
                    {textConfirm}
                </Button>
            </ButtonWrapper>
        )}
    </StyledFooter>
);

Footer.propTypes = {
    onConfirm: PropTypes.func,
    onReset: PropTypes.func,
    textConfirm: PropTypes.string,
    textReset: PropTypes.string,
};

Footer.defaultProps = {
    onConfirm: null,
    onReset: null,
    textConfirm: 'pas toe',
    textReset: 'reset',
};

export default Footer;
