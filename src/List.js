import React from 'react';
import Item from './Item';

class List extends React.Component{
   render(){
      return(
         <ol>
            {this.props.nth.map(gg=>{
               return(
                  <Item smth={gg} />
               );
            })
            }
         </ol>
         

      );
   }
}

export default List;