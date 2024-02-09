import { Component } from "react";
import css from "./Searchbar.module.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FcSearch } from "react-icons/fc";

export class Searchbar extends Component {
    state = { searchQuery: "" };

    handleChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };

    handleSubmit = event => {
        event.preventDefault();
        if (this.state.searchQuery.trim() === "") {
            toast.error("Enter the query word");
            return;
        }
        this.props.onSubmitForm(this.state.searchQuery);
    };

    render() {
        return (
            <div>
                <header className={css.searchbar}>
                    <form className={css.searchForm} onSubmit={this.handleSubmit}>
                        <button type="submit" className={css.searchFormBtn}>
                            <span className={css.searchFormBtnLabel}>Search</span>
                            <FcSearch size={"2em"} />
                        </button>

                        <input
                            className={css.searchFormInput}
                            type="text"
                            autoComplete="off"
                            autoFocus
                            placeholder="Search images and photos"
                            onChange={this.handleChange}
                            value={this.state.searchQuery}
                        />
                    </form>
                </header>
            </div>
        );
    }
};