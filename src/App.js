import React from "react";
import List from "./List";


class App extends React.Component{

  constructor(){
    super();
    this.state={
      data:['boob','noob','koob']
    };

    this.add = this.add.bind(this);
    this.input = React.createRef();

  }

  add() {
  
    this.setState(
      {data:[...this.state.data,this.input.current.value]});
   
    
  }

  render(){
    return(
      <div>
        <List nth = {this.state.data} />
        <input type = "text" ref = { this.input} />
        <button onClick={this.add} >Button</button>
      </div>
    );
  }
  
  
  
}

export default App;