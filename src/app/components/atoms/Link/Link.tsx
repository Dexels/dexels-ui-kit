import { DefaultTheme, StyledComponent } from 'styled-components';
import React, { FunctionComponent, ReactNode, useCallback, useState } from 'react';
import { StyledLink, StyledLinkText } from './Link.sc';
import { useHistory } from 'react-router-dom';

export interface LinkProps {
    children: ReactNode;
    hasHoverEffect?: boolean;
    onClick?: () => void;
}

export interface NativeLinkProps extends LinkProps {
    as?: StyledComponent<'a', DefaultTheme> | 'a';
    href: string;
    rel?: string;
    target?: string;
}

export interface RouterLinkProps extends LinkProps {
    as?: StyledComponent<'button', DefaultTheme> | 'button';
    to: string;
}

export const Link: FunctionComponent<NativeLinkProps | RouterLinkProps> = (props) => {
    const [isFocused, setIsFocused] = useState(false);
    const [isHovered, setIsHovered] = useState(false);
    const { children, hasHoverEffect, onClick } = props;
    const history = useHistory();
    // eslint-disable-next-line react/destructuring-assignment
    const route = 'to' in props ? props.to : '';

    const onClickCallback = useCallback(() => {
        if (onClick) {
            onClick();
        }

        history.push(route);
    }, [route, onClick]);

    const onFocusCallback = useCallback(() => {
        setIsFocused(true);
    }, []);

    const onHoveredCallback = useCallback(() => {
        setIsHovered(!isHovered);
    }, [isHovered]);

    if ('to' in props) {
        const { as = 'button' } = props;

        return (
            <StyledLink as={as} onClick={onClickCallback}>
                <StyledLinkText
                    hasHoverEffect={hasHoverEffect || false}
                    isFocused={isFocused}
                    isHovered={isHovered}
                    onFocus={onFocusCallback}
                    onMouseEnter={onHoveredCallback}
                    onMouseLeave={onHoveredCallback}
                >
                    {children}
                </StyledLinkText>
            </StyledLink>
        );
    }

    const { as = 'a', href, rel = 'noreferrer noopener', target = '_blank' } = props;

    return (
        <StyledLink as={as} href={href} rel={rel} target={target}>
            <StyledLinkText
                hasHoverEffect={hasHoverEffect || false}
                isFocused={isFocused}
                isHovered={isHovered}
                onFocus={onFocusCallback}
                onMouseEnter={onHoveredCallback}
                onMouseLeave={onHoveredCallback}
            >
                {children}
            </StyledLinkText>
        </StyledLink>
    );
};

export default Link;
