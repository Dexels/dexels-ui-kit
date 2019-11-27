import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import { menuItems } from './mockup/menuItems';
import notes from './notes.md';
import React from 'react';

export default {
    parameters: {
        notes,
    },
    title: 'molecules/Menu',
};

export const Configurable = () => (
    <BrowserRouter>
        <div
            style={{
                display: 'flex',
                flexWrap: 'nowrap',
            }}
        >
            <div
                style={{
                    flex: '0 0 auto',
                    width: '300px',
                }}
            >
                <Menu items={menuItems} />
            </div>
            <div
                style={{
                    flex: '1 1 auto',
                    padding: '0 0 0 32px',
                }}
            >
                {menuItems.map(({ children, path, text }) => {
                    if (children.length > 0) {
                        return children.map(({ path: childPath, text: childText }) => (
                            <Route key={childText} path={childPath}>
                                {`${childText} pagina`}
                            </Route>
                        ));
                    }

                    return (
                        <Route key={path} path={path}>
                            {`${text} pagina`}
                        </Route>
                    );
                })}
            </div>
        </div>
    </BrowserRouter>
);
