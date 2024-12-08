import { useState , useEffect } from "react";
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body =  () => {

  // Local State variable - Super powerful variable
  const [listOfRestaurants,setListOfRestaurant] = useState([]);

  const [searchText,setSearchText] = useState("");
  const [filteredRestaurant,setfilteredRestaurant] = useState([]);

  // Whenever state variables updata,react triggers a reconiliation cycle(re-reders the component)


  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=16.30070&lng=80.46390&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING "
    );
    const json = await data.json();
    // console.log(json);

    // OptionalChanging
   setListOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants) 
   setfilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const OnlineStatus = useOnlineStatus();

  if(OnlineStatus === false)
    return(
  <h1>
    Looks like you're offline!! Please check your internet connection;  
  </h1>
  )
  
  // Conditional Rendering 
 
    return listOfRestaurants.length === 0?<Shimmer />: (
      <div className="body">
        <div className="filter flex">
          <div className="search m-4 p-4 ">
            <input type="text"
             className="border border-solid border-black"
              value={searchText} 
              onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button className="px-4 py-2 bg-green-100 m-4 rounded-lg"  
            onClick={()=>{
              //  Filter the restuarant cards and update the UI
              const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())) ;
              setfilteredRestaurant(filteredRestaurant);
              // Search Text 
              console.log(searchText);
              }}
            >Search</button>
          </div>
           <div className="search m-4 p-4 flex items-center">
           <button 
           className="px-4 py-2 bg-gray-100 rounded-xl " onClick={()=>{
            

            // Filter Logic here    
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating>4.2
            ); 
            setfilteredRestaurant(filteredList);
            
           
          }}
            >
              Top Rated Restaurants
              </button>
           </div>
        </div>
        <div className="res-container flex flex-wrap">
        {filteredRestaurant.map((restaurant ) => (
          <Link
          key={restaurant.info.id}
          to={"/restaurants/"+ restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
       </div>
    );
  };
  export default Body;