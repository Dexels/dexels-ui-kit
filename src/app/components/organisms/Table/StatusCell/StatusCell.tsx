import { IconType, Placement, Status, StatusIndicatorSize } from '../../../../types';
import { IconWrapper, ImageWrapper, StyledStatusCell } from './StatusCell.sc';
import React, { FunctionComponent, ReactNode, useContext } from 'react';
import getStatusColor from '../../../../styles/mixins/getStatusColor';
import Icon from '../../../atoms/Icon/Icon';
import StatusIndicator from '../../../atoms/StatusIndicator/StatusIndicator';
import { ThemeContext } from 'styled-components';

export interface StatusCellProps {
    icon?: IconType;
    iconColor?: string;
    image?: string | ReactNode;
    status: Status;
}

export const StatusCell: FunctionComponent<StatusCellProps> = ({ icon, iconColor, image, status }) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledStatusCell>
            <StatusIndicator
                background="inherit"
                placement={Placement.LEFT}
                size={StatusIndicatorSize.LARGE}
                status={status}
            >
                {(image || icon) &&
                    (image ? (
                        <ImageWrapper>
                            {typeof image === 'string' ? <img alt="statusimage" src={image} /> : image}
                        </ImageWrapper>
                    ) : (
                        icon && (
                            <IconWrapper iconColor={iconColor || getStatusColor(status, theme)}>
                                <Icon type={icon} />
                            </IconWrapper>
                        )
                    ))}
            </StatusIndicator>
        </StyledStatusCell>
    );
};

export default StatusCell;
