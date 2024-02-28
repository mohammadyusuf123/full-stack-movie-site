/* eslint-disable react/prop-types */
import { LazyLoadImage } from "react-lazy-load-image-component";


const Img = ({ src, className }) => {
    return (
        <LazyLoadImage
        className={className || ""}
        alt=""
        effect="blur"
        src={src}
    />
    );
};

export default Img;