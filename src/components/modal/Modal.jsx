import { Component } from "react";
import css from "./Modal.module.css";

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.escapeCloseModal);
    }
    componentWillUnmount() {
        window.removeEventListener("keydown", this.escapeCloseModal);
    }

    escapeCloseModal = event => {
        if (event.code === "Escape") {
            this.props.onCloseModal();
        }
    };

    backdropCloseModal = event => {
        if (event.target === event.currentTarget) {
            this.props.onCloseModal();
        }
    };

    render() {
        return (
            <div onClick={this.backdropCloseModal} className={css.overlay}>
                <div className={css.modal}>
                    <img src={this.props.largeImageURL} alt={this.props.tags} />
                </div>
            </div>
        );
    }
};