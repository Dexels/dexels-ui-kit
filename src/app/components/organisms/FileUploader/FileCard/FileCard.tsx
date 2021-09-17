import {
    ButtonWrapper,
    DetailsWrapper,
    IconWrapper,
    ImageWrapper,
    InputWrapper,
    StyledFileCard,
    Subtitle,
    Title,
} from './FileCard.sc';
import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { IconType, InputType, Size } from '../../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import { defineFileFormats } from '../utils/defineFileFormats';
import { FileTypes } from '../types';
import { getFileType } from '../../../../utils/functions/fileFunctions';
import Input from '../../../molecules/Input/Input';
import { Spacer } from '../../FileUploadDialog/FileUploadDialog.sc';

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
    error?: ReactNode;
    file: File;
    isInvalid?: boolean;
    isLoading?: boolean;
    labelInputDescription?: ReactNode;
    labelInputName?: ReactNode;
    maxLengthDescription?: number;
    maxLengthName?: number;
    onChangeDescription?: (event: ChangeEvent<HTMLInputElement>) => void;
    onChangeName?: (event: ChangeEvent<HTMLInputElement>) => void;
    onDelete?: () => void;
    valueDescription?: string;
    valueName?: string;
}

export const FileCard: FunctionComponent<FileCardProps> = ({
    error,
    file,
    isInvalid = false,
    isLoading = false,
    labelInputDescription,
    labelInputName,
    maxLengthDescription = 255,
    maxLengthName = 100,
    onChangeDescription,
    onChangeName,
    onDelete,
    valueDescription,
    valueName,
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

            <InputWrapper>
                {labelInputName && onChangeName && (
                    <Input
                        label={labelInputName}
                        maxLength={maxLengthName}
                        name="name"
                        onChange={onChangeName}
                        type={InputType.TEXT}
                        value={valueName}
                    />
                )}
                {labelInputDescription && labelInputName && onChangeName && onChangeDescription && <Spacer />}
                {labelInputDescription && onChangeDescription && (
                    <Input
                        label={labelInputDescription}
                        maxLength={maxLengthDescription}
                        name="description"
                        onChange={onChangeDescription}
                        type={InputType.TEXT}
                        value={valueDescription}
                    />
                )}
            </InputWrapper>
        </StyledFileCard>
    );
};

export default FileCard;
