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

export const TopText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 1.5)};
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${({ theme }): string => theme.colorText.primary};
`;

TopText.defaultProps = {
    theme: themeBasic,
};

export const BottomText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    margin: ${({ theme }): string => theme.spacing(1, 0, 0)};
    color: ${({ theme }): string => theme.shades.three};
`;
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

export const FileCardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`;
