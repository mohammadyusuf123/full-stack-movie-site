import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { Provider } from 'react-redux'
import {store} from './store/store.js'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home/Home.jsx'
import Details from './pages/details/Details.jsx'
import SearchResult from './pages/searchResult/SearchResult.jsx'
import Explore from './pages/explore/Explore.jsx'
import NotFound from './pages/404/NotFound.jsx'


const router=createBrowserRouter([{
  path:"/", element:<App/>,
  children:[  { path:"/", element:<Home/>,
  errorElement:<NotFound/>
},
{ path:"/:mediaType/:id", element:<Details/>},
{ path:"/search/:query", element:<SearchResult/>},
{ path:"/explore/:mediaType", element:<Explore/>},]
 
  
  
}])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
  
    </Provider>
   
  </React.StrictMode>,
)
