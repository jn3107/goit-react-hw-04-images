import css from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ id, tags, webformatURL, largeImageURL, onModalClick }) => {
    return (
        <div>
            <li key={id} className={css.galleryItem}>
                <img
                    className={css.galleryItemImage}
                    src={webformatURL}
                    alt={tags}
                    onClick={() => onModalClick(largeImageURL, tags)}
                />
            </li>
        </div>
    );
};

export { ImageGalleryItem };