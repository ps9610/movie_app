import React from "react";

function Food({ name, picture }){
	return(
    <div>
		  <h2>I like {name}</h2>
      <img src = {picture} />
    </div>
	);
}

//자동으로 props 배열에 넣기
const foodILike = [
  {
    name : "Cheese",
    image : 
      "https://www.costco.co.kr/medias/sys_master/images/hd4/h11/16038628458526.jpg"
  },
  {
    name : "Bread",
    image : 
      "https://www.costco.co.kr/medias/sys_master/images/hf2/h12/52418447867934.jpg"
  },
  {
    name : "Rice",
    image : 
      "https://www.costco.co.kr/medias/sys_master/images/hc3/hcd/49310277500958.jpg"
  },
  {
    name : "Chicken",
    image : 
      "https://www.costco.co.kr/medias/sys_master/images/he2/h59/51162372833310.jpg"
  },
  {
    name : "Water",
    image : 
      "https://www.costco.co.kr/medias/sys_master/images/h6e/he4/62106049642526.jpg"
  },

]

function App() {
  return (
    <div>
      { foodILike.map( dish => (<Food name={dish.name} picture={dish.image} />) ) }
    </div>
  );
}
{/* map
  배열의 각 item에서 function을 실행하는 배열을 가지는 JS function이며
  그 함수의 결과를 갖는 배열을 준다. */}

export default App;
  