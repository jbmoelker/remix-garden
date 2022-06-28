import { Link } from '@remix-run/react';

const navItems = [
    {
        label: 'Home',
        href: '/',
    },
    {
        label: 'Garden',
        href: '/garden',
    },
];

export const AppHeader = () => {
    return (
        <header className="app-header">
            <Link to="/">
                <h1>Garden tracker 🪴</h1>
            </Link>

            <nav className="navigation">
                <ul>
                    {navItems.map((item) => (
                        <li key={item.href}>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};
