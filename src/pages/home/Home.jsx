
import Trending from "../trending/Trending";
import HeroBanner from "./heroBanner/HeroBanner";
import "./style.scss"
const Home = () => {
    return (
        <div className="homePage">
            <HeroBanner />
            <Trending />
            {/* <Popular />
            <TopRated /> */}
        </div>
    );
};

export default Home;