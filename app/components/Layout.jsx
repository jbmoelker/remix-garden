import { AppHeader } from './AppHeader';

export const Layout = ({ children }) => {
    return (
        <div className="layout">
            <AppHeader />
            <main className="layout__content">{children}</main>
        </div>
    );
};
