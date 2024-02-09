import { Component } from "react";
import { Button } from "./button/Button";
import { ImageGallery } from "./imageGallery/ImageGallery";
import { Loader } from "./loader/Loader";
import { Modal } from "./modal/Modal";
import { Searchbar } from "./searchbar/Searchbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fetchImages } from "../api/apiService";
import css from "./App.module.css";

export class App extends Component {
  state = {
    searchQuery: "",
    page: 1,
    images: [],
    totalPages: 0,
    showModal: false,
    showLoader: false,
    largeImageURL: null,
    tags: "",
    error: null,
    randomId: null,
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page, randomId} = this.state;
    if (prevState.searchQuery !== searchQuery || prevState.page !== page || prevState.randomId !== randomId) {
      try {
        this.setState({ showLoader: true });

        const {hits, totalHits} = await fetchImages(searchQuery, page);
        if (hits.length === 0) {
          toast.error(
            "Sorry, there are no images matching your search query."
          );
          return;
        }
       
        const newTotalPages = Math.ceil(totalHits / 12);
  this.setState((prevState) => ({
    images: [...prevState.images, ...hits],
    totalPages: newTotalPages,
  }));

  if (page === newTotalPages) {
    toast.success("Sorry, there are no more images matching your search query.");
  }
      } catch (error) {
        this.setState({ error: error.message });
        toast.error(
          `Sorry, ${error.message}.`
        );
        return;
      } finally {
        this.setState({ showLoader: false });
      }
    }
  }

  closeModal = () => {
    this.setState({ showModal: false });
  };

  openModal = (largeImageURL, tags) => {
    this.setState({ showModal: true, largeImageURL, tags });
  };

  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery, page: 1, images: [], randomId: Math.random(), totalPages:0, });
  };

  loadMoreClick = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, page, largeImageURL, showModal,  showLoader, totalPages} =
      this.state;
      
    return (
      <div className={css.container}>
        <Searchbar onSubmitForm={this.handleSearchFormSubmit} />

        <ImageGallery images={images} onModalClick={this.openModal} />

        {showModal && (
          <Modal largeImageURL={largeImageURL} onCloseModal={this.closeModal} />
        )}

        {images.length > 0 && totalPages !== page && !showLoader && <Button onLoadMoreClick={this.loadMoreClick} />}

        {showLoader && <Loader />}
        
        <ToastContainer autoClose={3000} />
      </div>
    );
  }
};