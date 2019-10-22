import PropTypes from 'prop-types';
import { spacingUnit } from '../../../styles/theme/layout';
import styled from 'styled-components';

export const StyledToolbar = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ButtonWrapper = styled.div`
    margin: 0 ${spacingUnit} 0 ${spacingUnit};
`;

ButtonWrapper.propTypes = {
    children: PropTypes.node.isRequired,
};
