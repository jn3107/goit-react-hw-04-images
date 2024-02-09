import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={css.divLoader}>
            <Bars
                height="80"
                width="80"
                color="#1bead9"
                ariaLabel="bars-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    );
};

export { Loader };