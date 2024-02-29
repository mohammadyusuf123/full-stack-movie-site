/* eslint-disable react/no-unescaped-entities */

import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import SwitchTabs from '../../../components/switchTabs/SwitchTabs'
import Carousel from '../../../components/carousel/Carousel'
import { useState } from 'react';
import useFetch from '../../../hooks/useFetch';

function TopRated() {
    const [endpoint, setEndpoint] = useState("movie");

    const { data, loading } = useFetch(`/${endpoint}/top_rated`);

    const onTabChange = (tab) => {
        setEndpoint(tab === "Movies" ? "movie" : "tv");
    };
  return (
    <div className="carouselSection">
    <ContentWrapper>
        <span className="carouselTitle">What's Popular</span>
        <SwitchTabs data={["Movies", "TV Shows"]} onTabChange={onTabChange} />
    </ContentWrapper>
    <Carousel data={data?.results} loading={loading} />
</div>
  )
}

export default TopRated