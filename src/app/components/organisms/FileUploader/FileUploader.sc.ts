import styled, { FlattenSimpleInterpolation, SimpleInterpolation } from 'styled-components';
import { Button } from '../../molecules/Button/Button';
import { Easing } from '../../../types';
import { Icon } from '../../atoms/Icon/Icon';
import { LoadingProgress } from './types';
import { themeBasic } from '../../../styles/theming/themes/basic';
import { transitionEffect } from '../../../styles/mixins/transitionEffects';

export const FileUploaderInfo = styled.div`
    opacity: 1;
    width: 100%;
`;

interface StyledFileUploaderProps {
    isDragging: boolean;
}

export const FileUploaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${({ theme }): string => theme.spacing(1)};
    padding: ${({ theme }): string => theme.spacing(1.5)};
    min-width: 100%;
    min-height: 100%;
    text-align: center;
`;

export const FileUploaderWrapper = styled.div<StyledFileUploaderProps>`
    padding: 7px;
    ${({ theme, isDragging }): SimpleInterpolation => {
        let uploaderCss = `
            border-radius: ${theme.spacing(1.5)};
            min-height: ${theme.spacing(25)};
            display: flex;
        `;

        if (isDragging) {
            uploaderCss += `
                background-color: ${theme.shades.eight};
                ${FileUploaderContent} {
                    border: 2px dashed ${theme.shades.four};
                }

                ${FileUploaderInfo} {
                    opacity: .4;
                }
            `;
        } else {
            uploaderCss += `
                background-color: ${theme.shades.seven};

                ${FileUploaderContent} {
                    border: 2px dashed ${theme.shades.five};
                }
            `;
        }

        return uploaderCss;
    }}
`;

export const TopText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ theme }): string => theme.shades.three};
`;

export const BottomText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    margin-top: ${({ theme }): string => theme.spacing(1)};
    color: ${({ theme }): string => theme.shades.three};
`;

export const StatusText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ theme }): string => theme.shades.one};
`;

export const AlertText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ theme }): string => theme.colorInvalid};
`;

export const SuccessIcon = styled(Icon)`
    display: block;
    margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ theme }): string => theme.colorText.secondary};
    font-size: ${({ theme }): string => theme.spacing(4.5)};
`;

export const AlertIcon = styled(Icon)`
    display: block;
    margin-bottom: ${({ theme }): string => theme.spacing(1.5)};
    color: ${({ theme }): string => theme.colorInvalid};
    font-size: ${({ theme }): string => theme.spacing(4.5)};
`;

interface LoadingStatusProps {
    progress: LoadingProgress;
}

export const LoadingBar = styled.div<LoadingStatusProps>`
    ${({ theme, progress }): SimpleInterpolation => `
        position: relative;
        margin: 0 ${theme.spacing(5.5)} ${theme.spacing(2)};
        border-radius: ${theme.spacing(1)};
        height: ${theme.spacing(2)};
        background-color: ${theme.shades.six};
        overflow: hidden;

        &:before {
            position: absolute;
            content: '';
            width: ${progress}%;
            top: 0;
            bottom: 0;
            left: 0;
            background-color: ${theme.colorText.secondary};
        }
    `}

    &::before {
        ${(): FlattenSimpleInterpolation =>
            transitionEffect({
                duration: 500,
                easing: Easing.EASE,
            })}
    }
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

FileUploaderWrapper.defaultProps = {
    theme: themeBasic,
};
