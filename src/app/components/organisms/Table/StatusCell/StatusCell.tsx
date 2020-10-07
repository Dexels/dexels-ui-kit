import { IconType, Placement, Status, StatusIndicatorSize } from '../../../../types';
import { IconWrapper, ImageWrapper, StyledStatusIndicator } from './StatusCell.sc';
import React, { FunctionComponent, ReactNode, useContext } from 'react';
import getStatusColor from '../../../../styles/mixins/getStatusColor';
import { IconCustomizable } from '../../../molecules/IconCustomizable/IconCustomizable';
import { IconCustomizableSize } from '../../../molecules/IconCustomizable/types';
import { ThemeContext } from 'styled-components';

export interface StatusCellProps {
    icon?: IconType;
    iconColor?: string;
    image?: string | ReactNode;
    status: Status;
    tooltipText?: string;
}

export const StatusCell: FunctionComponent<StatusCellProps> = ({ icon, iconColor, image, status, tooltipText }) => {
    const theme = useContext(ThemeContext);

    return (
        <StyledStatusIndicator
            background="inherit"
            placement={Placement.LEFT}
            size={StatusIndicatorSize.LARGE}
            status={status}
            tooltipText={tooltipText}
        >
            {(image || icon) &&
                (image ? (
                    <ImageWrapper>
                        {typeof image === 'string' ? <img alt="statusimage" src={image} /> : image}
                    </ImageWrapper>
                ) : (
                    icon && (
                        <IconWrapper iconColor={iconColor || getStatusColor(status, theme)}>
                            <IconCustomizable iconSize={IconCustomizableSize.SIZE24} iconType={icon} />
                        </IconWrapper>
                    )
                ))}
        </StyledStatusIndicator>
    );
};

export default StatusCell;
