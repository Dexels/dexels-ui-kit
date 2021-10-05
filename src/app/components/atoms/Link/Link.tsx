import React, { FunctionComponent, ReactNode, useCallback } from 'react';
import styled, { DefaultTheme, StyledComponent } from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledLink = styled.span`
    text-decoration: none;
`;

export interface LinkProps {
    children: ReactNode;
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

const Link: FunctionComponent<NativeLinkProps | RouterLinkProps> = (props) => {
    const { children, onClick } = props;
    const history = useHistory();
    // eslint-disable-next-line react/destructuring-assignment
    const route = 'to' in props ? props.to : '';

    const onClickCallback = useCallback(() => {
        if (onClick) {
            onClick();
        }

        history.push(route);
    }, [route, onClick]);

    if ('to' in props) {
        const { as = 'button' } = props;

        return (
            <StyledLink as={as} onClick={onClickCallback}>
                {children}
            </StyledLink>
        );
    }

    const { as = 'a', href, rel = 'noreferrer noopener', target = '_blank' } = props;

    return (
        <StyledLink as={as} href={href} rel={rel} target={target}>
            {children}
        </StyledLink>
    );
};

export default Link;
