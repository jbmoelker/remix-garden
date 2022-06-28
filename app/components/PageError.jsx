export const PageError = ({ error }) => (
    <div className="page-error">
        <p>Something went wrong 🥲</p>
        <p>Message: {error.message}</p>
    </div>
);
