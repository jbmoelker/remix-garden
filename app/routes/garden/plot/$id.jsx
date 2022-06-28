import { json } from '@remix-run/cloudflare';
import { useLoaderData, useParams } from '@remix-run/react';
import { plots } from '../../../db';
import { PageError } from '../../../components/PageError';

export const loader = async ({ params }) => {
    const plot = await plots.get(params.id);
    return json({ plot });
};

export const ErrorBoundary = ({ error }) => <PageError error={error} />;

export default function Plot() {
    const { plot } = useLoaderData();
    const params = useParams();
    console.log(params, plot);
    return (
      <article>
        <h3>
          Plot {plot.id}: {plot.name} {plot?.vegetable.emoji}
        </h3>
        <p>{plot.note}</p>
        <p>date: {plot.date}</p>
      </article>
    );
}
