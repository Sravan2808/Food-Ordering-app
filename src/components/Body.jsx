import { useState , useEffect } from "react";
import RestaurantCard  from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

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
  
  // Conditional Rendering 
 
    return listOfRestaurants.length === 0?<Shimmer />: (
      <div className="body">
        <div className="filter">
          <div className="search">
            <input type="text" className="search-box" value={searchText} onChange={(e)=>{
              setSearchText(e.target.value);
            }} />
            <button onClick={()=>{
              //  Filter the restuarant cards and update the UI
              const filteredRestaurant=listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase())) ;
              setfilteredRestaurant(filteredRestaurant);
              // Search Text 
              console.log(searchText);
              }}
            >Search</button>
          </div>
            <button className="filter-btn" onClick={()=>{
            

            // Filter Logic here    
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating>4.4
            ); 
            setListOfRestaurant(filteredList)
            
           
          }}
            >
              Top Rated Restaurants
              </button>
        </div>
        <div className="res-container">
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