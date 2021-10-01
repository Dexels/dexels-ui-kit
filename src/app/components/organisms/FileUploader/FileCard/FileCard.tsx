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
import { defineFileFormats, getFileTypeIconType } from '../utils/fileFormatsFunctions';
import { IconCustomizable, IconCustomizableSize } from '../../../molecules/IconCustomizable';
import { IconType, InputType, Size } from '../../../../types';
import React, { ChangeEvent, FunctionComponent, ReactNode } from 'react';
import ButtonIcon from '../../../molecules/ButtonIcon/ButtonIcon';
import { FileTypes } from '../types';
import { getFileType } from '../../../../utils/functions/fileFunctions';
import Input from '../../../molecules/Input/Input';
import { Spacer } from '../../FileUploadDialog/FileUploadDialog.sc';

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
                <IconWrapper isInvalid={isInvalid} isLoading={isLoading}>
                    <IconCustomizable
                        iconSize={IconCustomizableSize.SIZE48}
                        iconType={isInvalid ? IconType.DANGER : getFileTypeIconType(fileType)}
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

            {isLoading && (
                <IconWrapper isLoading={isLoading}>
                    <IconCustomizable
                        iconSize={IconCustomizableSize.SIZE24}
                        iconType={IconType.CHANGE_REVERSE}
                        isRotating
                    />
                </IconWrapper>
            )}

            {!isLoading && onDelete && (
                <ButtonWrapper>
                    <ButtonIcon iconType={IconType.TRASHCAN} onClick={onDelete} size={Size.XLARGE} />
                </ButtonWrapper>
            )}

            {!isLoading && (labelInputDescription || labelInputName) && (
                <InputWrapper>
                    {labelInputName && (
                        <Input
                            hasTransparentBackground={false}
                            label={labelInputName}
                            maxLength={maxLengthName}
                            name="name"
                            onChange={onChangeName}
                            type={InputType.TEXT}
                            value={valueName}
                        />
                    )}
                    {labelInputDescription && labelInputName && <Spacer />}
                    {labelInputDescription && (
                        <Input
                            hasTransparentBackground={false}
                            label={labelInputDescription}
                            maxLength={maxLengthDescription}
                            name="description"
                            onChange={onChangeDescription}
                            type={InputType.TEXT}
                            value={valueDescription}
                        />
                    )}
                </InputWrapper>
            )}
        </StyledFileCard>
    );
};

export default FileCard;
