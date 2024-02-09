import axios from "axios";

const KEY = "40764423-bd23005c99ec8991fd162795c";
const pageLimit = 12;
axios.defaults.baseURL = "https://pixabay.com/api/";

const fetchImages = async (searchQuery, page) => {
    const { data } = await axios({
        params: {
            key: KEY,
            q: searchQuery,
            image_type: "photo",
            orientation: "horizontal",
            safesearch: true,
            per_page: pageLimit,
            page,
        },
    });
    return data;
};

export { fetchImages };