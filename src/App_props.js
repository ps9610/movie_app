import React from "react";
import PropTypes from "prop-types";

const coffeeILike = [
  {
    id : 1,
    name : "coffee",
    image : 
      "https://image.istarbucks.co.kr/upload/store/skuimg/2015/07/[106509]_20150724164325806.jpg",
    rating : 5
  },
	{
    id : 2,
    name : "americano",
    image : 
      "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[94]_20150813222021797.jpg",
      rating : 4.3
  },
  {
    id : 3,
    name : "latte",
    image : 
      "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[41]_20150813221357067.jpg",
    rating : 5.1
  },
  {
    id : 4,
    name : "cappuccino",
    image : 
      "https://image.istarbucks.co.kr/upload/store/skuimg/2015/08/[38]_20150821164230205.jpg",
      rating : 3.8
  },
  
  {
    id : 5,
    name : "milktea",
    image : 
      "https://image.istarbucks.co.kr/upload/store/skuimg/2020/06/[9200000002963]_20200616103700894.jpg",
      rating : 4.6
  }                                                                                             
]

function Coffee({ name, picture, rating }){
	return(
    <div>
		  <h2>I like {name}.</h2>
      <h4>{rating}/5.5</h4>
      <img src = {picture} alt={name} />
    </div>
	);
}

Coffee.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
    <div>
      {coffeeILike.map( drink =>(
        <Coffee 
        key={drink.id} 
        name={drink.name} 
        picture={drink.image}
        rating={drink.rating} />
      ))}
    </div>
  );	
}

export default App;
  