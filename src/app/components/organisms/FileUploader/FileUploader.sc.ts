import styled, { css, SimpleInterpolation } from 'styled-components';
import Button from '../../molecules/Button/Button';
import { themeBasic } from '../../../styles/theming/themes/basic';

interface FileUploaderInfo {
    isDragging: boolean;
}

export const FileUploaderInfo = styled.div<FileUploaderInfo>`
    opacity: 1;
    padding: ${({ theme }): string => theme.spacing(1.5)};
    width: 100%;

    ${({ isDragging, theme }): SimpleInterpolation =>
        css`
            ${!isDragging &&
            css`
                border: 2px dashed ${theme.shades.five};
            `}

            ${isDragging &&
            css`
                opacity: 0.4;
                border: 2px dashed ${theme.shades.four};
            `}
        `}
`;

FileUploaderInfo.defaultProps = {
    theme: themeBasic,
};

export const FileUploaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }): string => theme.spacing(1)};
    width: 100%;
    height: 100%;
    text-align: center;
`;

interface FileUploaderWrapperProps {
    isDragging: boolean;
}

export const FileUploaderWrapper = styled.div<FileUploaderWrapperProps>`
    display: flex;
    border-radius: ${({ theme }): string => theme.spacing(1.5)};
    background-color: ${({ theme }): string => theme.shades.seven};
    padding: ${({ theme }): string => theme.spacing(1)};

    ${({ isDragging, theme }): SimpleInterpolation =>
        isDragging &&
        css`
            background-color: ${theme.shades.eight};
        `}
`;

FileUploaderWrapper.defaultProps = {
    theme: themeBasic,
};

interface TopTextProps {
    isInvalid: boolean;
    isLoading: boolean;
    isSuccess: boolean;
}

export const TopText = styled.div<TopTextProps>`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 1.5)};
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isSuccess, isLoading, theme }): SimpleInterpolation =>
        (isSuccess || isLoading) &&
        css`
            color: ${theme.shades.one};
        `}

    ${({ isInvalid, theme }): SimpleInterpolation =>
        isInvalid &&
        css`
            color: ${theme.colorInvalid};
        `}
`;

TopText.defaultProps = {
    theme: themeBasic,
};

export const BottomText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    margin: ${({ theme }): string => theme.spacing(1, 0, 0)};
    color: ${({ theme }): string => theme.shades.three};
`;

interface IconWrapperProps {
    isInvalid: boolean;
    isSuccess: boolean;
}
export const IconWrapper = styled.div<IconWrapperProps>`
    margin: ${({ theme }): string => theme.spacing(0, 0, 1.25)};
    color: ${({ theme }): string => theme.colorText.primary};

    ${({ isSuccess, theme }): SimpleInterpolation =>
        isSuccess &&
        css`
            color: ${theme.colorText.secondary};
        `}

    ${({ isInvalid, theme }): SimpleInterpolation =>
        isInvalid &&
        css`
            color: ${theme.colorInvalid};
        `}
`;

IconWrapper.defaultProps = {
    theme: themeBasic,
};

export const HiddenInput = styled.input`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    cursor: pointer;
`;

export const StyledButton = styled(Button)`
    position: relative;
`;

export const FileNamesWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const FileName = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const ImageWrapper = styled.div`
    flex: 0 0 auto;
    width: 24px;
    height: 24px;

    img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
