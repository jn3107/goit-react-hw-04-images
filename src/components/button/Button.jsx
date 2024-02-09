import css from "./Button.module.css";

const Button = ({ onLoadMoreClick }) => {
    return (
        <div>
            <button
                className={css.loadMoreBtn}
                type="button"
                onClick={onLoadMoreClick}
            >
                Load more
            </button>
        </div>
    );
};

export { Button };