import {
    Links,
    LiveReload,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from '@remix-run/react';
import { Layout } from './components/Layout';
import styles from './styles/app.css';

export const meta = () => ({
    charset: 'utf-8',
    title: 'Garden tracker',
    viewport: 'width=device-width,initial-scale=1',
});

export const links = () => {
    return [
        { rel: 'stylesheet', href: styles },
        {
            rel: 'icon',
            href: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🪴</text></svg>',
        },
    ];
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <Meta />
                <Links />
            </head>
            <body>
                <Layout>
                    <Outlet />
                </Layout>
                <ScrollRestoration />
                <Scripts />
                <LiveReload />
            </body>
        </html>
    );
}
