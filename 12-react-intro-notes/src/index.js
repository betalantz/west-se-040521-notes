import React from 'react'
import ReactDOM from 'react-dom'

const Navbar = props => {
    return (<div class={`ui inverted ${props.color} menu`}>
        <a class='item'>
          <h2 class="ui header">
            <i class={`${props.icon} icon`}></i>
            <div class="content">
              {props.title}
            </div>
            <div class="sub header">
              {props.description}
            </div>
          </h2>
        </a>
      </div>
    )
}

ReactDOM.render(
    <Navbar 
        title='Paintr'
        description='Make collections of art'
        color='green'
        icon='paint brush' />,
    document.getElementById('main')
  );