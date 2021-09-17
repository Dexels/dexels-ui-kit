import {
    ButtonWrapper,
    DetailsWrapper,
    IconWrapper,
    ImageWrapper,
    StyledFileCard,
    Subtitle,
    Title,
} from './FileCard.sc';
import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { IconType, Size } from '../../../../types';
import React, { FunctionComponent, ReactNode } from 'react';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import { defineFileFormats } from '../utils/defineFileFormats';
import { FileTypes } from '../types';
import { getFileType } from '../../../../utils/functions/fileFunctions';

const getIconType = (): IconType =>
    // switch (fileType) {
    //     case defineFileFormats([FileTypes.AUDIO]).contains(fileType):
    //         return IconType.FILEAUDIO;

    //     case defineFileFormats([FileTypes.VIDEO]).contains(fileType):
    //         return IconType.FILEVIDEO;

    //     default:
    //
    IconType.FILEDOCUMENT;

export interface FileCardProps {
    children?: ReactNode;
    error?: ReactNode;
    file: File;
    isInvalid?: boolean;
    isLoading?: boolean;
    onDelete?: () => void;
}

export const FileCard: FunctionComponent<FileCardProps> = ({
    children,
    error,
    file,
    isInvalid = false,
    isLoading = false,
    onDelete,
}) => {
    const imageFileTypes = defineFileFormats([FileTypes.IMAGE]);
    const fileType = getFileType(file);

    return (
        <StyledFileCard>
            {!isInvalid && imageFileTypes.includes(fileType) ? (
                <ImageWrapper>
                    <img alt="" src={URL.createObjectURL(file)} />
                </ImageWrapper>
            ) : (
                <IconWrapper isInvalid={isInvalid}>
                    <IconCustomizable
                        iconSize={IconCustomizableSize.SIZE36}
                        iconType={isInvalid ? IconType.DANGER : getIconType()}
                    />
                </IconWrapper>
            )}

            <DetailsWrapper>
                <Title isInvalid={isInvalid}>{file.name}</Title>
                <Subtitle>
                    {error ||
                        (file.size / 1000 < 1000 ? `${(file.size / 1000).toFixed(2)}KB` : `${file.size / 1000000}MB`)}
                </Subtitle>
            </DetailsWrapper>

            {isLoading && <IconCustomizable iconSize={IconCustomizableSize.SIZE36} iconType={IconType.CHANGE} />}

            {!isLoading && onDelete && (
                <ButtonWrapper>
                    <ButtonIcon iconType={IconType.TRASHCAN} onClick={onDelete} size={Size.XLARGE} />
                </ButtonWrapper>
            )}

            {children}
        </StyledFileCard>
    );
};

export default FileCard;
