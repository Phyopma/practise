import React from "react";


class Item extends React.Component{
   render(){
      return(
         <li>{this.props.smth}</li>
      );
   }
}

export default Item;