import css from "./Modal.module.css";
import { useEffect } from "react";

export const Modal = ({ largeImageURL, tags, onCloseModal }) => {
    useEffect(() => {
        const escapeCloseModal = event => {
            if (event.code === "Escape") {
                onCloseModal();
            }
        };

        window.addEventListener("keydown", escapeCloseModal);
        return () => {
            window.removeEventListener("keydown", escapeCloseModal);
        };
    }, [onCloseModal]);
    
    const backdropCloseModal = event => {
        if (event.target === event.currentTarget) {
            onCloseModal();
        }
    };

    return (
        <div onClick={backdropCloseModal} className={css.overlay}>
            <div className={css.modal}>
                <img src={largeImageURL} alt={tags} />
            </div>
        </div>
    );
};