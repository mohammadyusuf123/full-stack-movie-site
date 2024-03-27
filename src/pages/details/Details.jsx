
import { useParams } from "react-router-dom";
import "./style.scss"
import useFetch from "../../hooks/useFetch";
import DetailsBanner from "./detailsBanner/DetailsBanner";
import Casting from "./casting/Casting";

const Details = () => {
    const {mediaType,id}=useParams()
    const { data,loading } = useFetch(`/${mediaType}/${id}/videos`);
    const { data: credits, loading: creditsLoading } = useFetch(
        `/${mediaType}/${id}/credits`
    );

 
    return (
        <div>
           <DetailsBanner video={data?.results?.[0]} crew={credits?.crew}/>
           <Casting data={credits?.cast} loading={creditsLoading} />
        </div>
    );
};

export default Details;