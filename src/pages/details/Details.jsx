
import { useParams } from "react-router-dom";
import "./style.scss"
import useFetch from "../../hooks/useFetch";
const Details = () => {
    const {mediaType,id}=useParams()
   const {data,loading}=useFetch(`/${mediaType}/${id}`)
   console.log(data)
    return (
        <div>
            This is details page
        </div>
    );
};

export default Details;