import { Outlet } from "react-router-dom"
import Headers from "./components/headers/Headers"
import Footer from "./components/footer/Footer"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { getApiConfiguration,  getGenres } from "./store/homeSlice";


function App() {
  const dispatch = useDispatch();
  const { url } = useSelector((state) => state.home);
  console.log(url);

  useEffect(() => {
      fetchApiConfig();
      genresCall();
      
  }, []);

  const fetchApiConfig = () => {
      fetchDataFromApi("/configuration").then((res) => {
          console.log(res);

          const url = {
              backdrop: res.images.secure_base_url + "original",
              poster: res.images.secure_base_url + "original",
              profile: res.images.secure_base_url + "original",
          };

          dispatch(getApiConfiguration(url));
      });
  };

  const genresCall=async()=>{
    let promises=[];
    let endPoints=["tv", "movie"];
    let allGenres={}

    endPoints.forEach((url)=>{
      promises.push(fetchDataFromApi(`/genre/${url}/list`))
    })
    const data = await Promise.all(promises)
    
    data.map(({genres})=>{
      return genres.map((item)=>(allGenres[item.id]=item))
    })
   dispatch(getGenres(allGenres))
  }
  
 
  return (
    <>
    <Headers/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
