import styled from 'styled-components';

export const StyledStatusCell = styled.div`
    display: flex;
    height: 100%;
`;

export const ImageWrapper = styled.div`
    display: flex;
    flex: 0 0 auto;
    align-items: center;
    align-self: center;
    justify-content: center;
    padding: 8px;
    width: 48px;
    height: 48px;

    img {
        display: block;
        object-fit: contain;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
`;

interface IconWrapperProps {
    iconColor: string;
}

export const IconWrapper = styled.div<IconWrapperProps>`
    display: flex;
    align-items: center;
    padding: 12px;
    color: ${({ iconColor }): string => iconColor};
    font-size: 24px; /* This sets the icon size, because it's a svg file */
`;
