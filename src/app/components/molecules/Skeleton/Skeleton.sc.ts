import styled from 'styled-components';

interface StyledSkeletonProps {
    color?: string;
    highlightColor?: string;
};

export const StyledSkeleton = styled.span<StyledSkeletonProps>`
    .react-loading-skeleton {
        background-color: ${({ color, theme }) => color || theme.shades.seven};
        background-image: ${({ color, highlightColor, theme }) => `linear-gradient(
            90deg,
            ${color || theme.shades.seven},
            ${highlightColor || theme.shades.nine},
            ${color || theme.shades.seven}
        )`};
    }
`;

export default StyledSkeleton;
