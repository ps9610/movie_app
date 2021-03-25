import React from "react";

class App extends React.Component{
  state = {
    count : 0
  };
  add = () => {
    //console.log("add");
    this.setState(current =>({count : current.count + 1}));
  };
  minus = () => {
    //console.log("minus");
    this.setState(current =>({count : current.count - 1}));
  };

  render(){
    console.log("2.  render");
    return (
      <div>
        <h1>This number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )
  }
  constructor(props){ 
    super(props);
    console.log("1. constructor");
  };
  componentDidMount(){
    console.log("3. Hey, This Component is render, you know?")
  }
  componentDidUpdate(){
    console.log("UPDATING!!!!!!!!!!!")
  }
}

export default App;