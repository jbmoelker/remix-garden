import { Link } from '@remix-run/react';
import defaultPlots from '../db/plots-seed.json';
import styles from './Garden.css';

export const Garden = ({ plots = defaultPlots }) => {
    return (
        <ul className="garden">
            {plots.map((plot) => (
                <li className="garden__plot" key={plot.id}>
                    {plot.vegetable && (
                        <span className="garden__emoji">
                            {plot.vegetable.emoji}
                        </span>
                    )}
                    <Link to={`/garden/plot/${plot.id}`}>{plot.name}</Link>
                </li>
            ))}
        </ul>
    );
};
Garden.styles = styles;
