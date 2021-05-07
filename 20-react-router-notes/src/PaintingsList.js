import React from 'react';
import Painting from './Painting';
// import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'


class PaintingsList extends React.Component{

  render(){
    return(
      
      <div>
        <div>{this.props.location.pathname}</div>
        {/* <Link to="/paintings/new"> Add a new painting</Link> */}
       <h1>Paintings</h1>
      {
      this.props.paintings.map(painting => (
        <Painting
          key={painting.id}
          painting={painting}
        />
      ))
      }
    </div>)
  }
}

export default withRouter(PaintingsList);
