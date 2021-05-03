import React from 'react'
import 'semantic-ui-css/semantic.min.css';
import NavBar from './NavBar';
import PaintingsList from './PaintingsList';
import paintings from './painting_data'
import PaintingForm from './PaintingForm'


class App extends React.Component{

  constructor(){
    super()
    this.state = {
      color: "red",
      paintings: paintings,
      formView: false
    }
  }

  changeColor = () => {
    this.setState({color: "yellow"})
  }

  toggleForm = () => {
    this.setState({
      formView: !this.state.formView
    })
  }

  addPainting = (info) => {
    // console.log(info)

    const newPainting = {
      // id: this.state.paintings[this.state.paintings.length-1].id + 1, //BONUS to get rid of warning
      image: info.image,
      title: info.title,
      artist: {
        name: info.artist
      },
      date: info.date,
      dimensions: {
        width: info.width,
        height: info.height
      },
      votes: 0 //add initial votes for a painting
    } // to match painting data format

    this.setState({
      paintings: [...this.state.paintings, newPainting], //.push is not used here because it returns length of an array after adding new element
      formView: !this.state.formView //to display paintings after adding a new painting info
    })
  }

  addVote = (id) => {
    console.log(id)
    this.setState({
      paintings: this.state.paintings.map(painting => {
        if(painting.id == id){
          return {...painting, votes: painting.votes + 1}
        } else {
          return painting
        }
      })
    })
  }


  render(){
  return (
    <div>

      <NavBar
        color={this.state.color}
        title="Paintr"
        icon="paint brush"
        description="an app we made"
        changeColor={this.changeColor}
      />

      <button onClick={this.toggleForm}>Show/Hide new painting form</button>

      {this.state.formView 
      ? <PaintingForm addPainting={this.addPainting} /> 
      : <PaintingsList paintings={this.state.paintings} addVote={this.addVote}/>}

    </div>
  )
  }
}

export default App;
