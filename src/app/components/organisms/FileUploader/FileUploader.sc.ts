import styled, { SimpleInterpolation } from 'styled-components';
import { Button } from '../../molecules/Button/Button';
import { IconCustomizable } from '../../molecules/IconCustomizable/IconCustomizable';
import { themeBasic } from '../../../styles/theming/themes/basic';

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
            uploaderCss = `${uploaderCss}
                background-color: ${theme.shades.eight};
                ${FileUploaderContent} {
                    border: 2px dashed ${theme.shades.four};
                }

                ${FileUploaderInfo} {
                    opacity: .4;
                }
            `;
        } else {
            uploaderCss = `${uploaderCss}
                background-color: ${theme.shades.seven};

                ${FileUploaderContent} {
                    border: 2px dashed ${theme.shades.five};
                }
            `;
        }

        return uploaderCss;
    }}
`;

const BaseText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().body1)}
    margin: ${({ theme }): string => theme.spacing(0, 0, 1.5)};
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const TopText = styled(BaseText)`
    color: ${({ theme }): string => theme.shades.three};
`;

export const BottomText = styled.div`
    ${({ theme }): string => theme.textStyling(theme.availableTextStyles().caption)}
    margin: ${({ theme }): string => theme.spacing(1, 0, 0)};
    color: ${({ theme }): string => theme.shades.three};
`;

export const StatusText = styled(BaseText)`
    color: ${({ theme }): string => theme.shades.one};
`;

export const AlertText = styled(BaseText)`
    color: ${({ theme }): string => theme.colorInvalid};
`;

export const BaseIcon = styled(IconCustomizable)`
    margin: ${({ theme }): string => theme.spacing(0, 0, 1.25)};
`;

export const SuccessIcon = styled(BaseIcon)`
    color: ${({ theme }): string => theme.colorText.secondary};
`;

export const AlertIcon = styled(BaseIcon)`
    color: ${({ theme }): string => theme.colorInvalid};
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
