import { useState } from 'react';
import * as db from '../db';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
    const vegetables = await db.vegetables.getAll();

    return {
        vegetables,
    };
};

const Vegetable = ({ vegetable }) => {
    const [style] = useState({
        animationDelay: Math.random() + 's',
        animationDuration: Math.random() * (6 - 3 + 1) + 3 + 's',
        left: Math.random() * 100 + '%',
        fontSize: Math.random() * (5 - 4 + 1) + 4 + 'em',
    });

    return (
        <div className="falling-emoji" key={vegetable.id} style={style}>
            {vegetable.emoji}
        </div>
    );
};

export default function Index() {
    const { vegetables } = useLoaderData();

    return [...vegetables, ...vegetables].map((vegetable, index) => (
        <Vegetable key={index} vegetable={vegetable} />
    ));
}
