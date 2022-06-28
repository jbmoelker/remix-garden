import { json } from '@remix-run/cloudflare';
import { Outlet, useLoaderData } from '@remix-run/react';
import { Garden } from '../components/Garden';
import { plots } from '../db';
import { PageError } from '../components/PageError';

function styleLinks(components) {
    return components.map((component) => ({
        rel: 'stylesheet',
        href: component.styles,
    }));
}

export function links() {
    return styleLinks([Garden]);
}

export const loader = async () => {
    const items = await plots.getAll();
    return json(items);
};

export const ErrorBoundary = ({ error }) => <PageError error={error} />;

export default function GardenView() {
    const plots = useLoaderData();
    return (
        <>
            <Garden plots={plots} />
            <div className="sidebar">
                <Outlet />
            </div>
        </>
    );
}
