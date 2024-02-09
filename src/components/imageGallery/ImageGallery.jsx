import { ImageGalleryItem } from "../imageGalleyItem/ImageGalleryItem";
import css from "./ImageGallery.module.css";

const ImageGallery = ({ images, onModalClick }) => {
    return (
        <div>
            <ul className={css.imageGallery}>
                {Array.isArray(images) &&
                    images.map(({ id, tags, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem
                            key={id}
                            tags={tags}
                            largeImageURL={largeImageURL}
                            webformatURL={webformatURL}
                            onModalClick={onModalClick}
                        />
                    ))}
            </ul>
        </div>
    );
};

export { ImageGallery };