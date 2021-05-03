# React-Form-Data-Flow

## SWBATs
* Write fully controlled forms
* Practice data flow in react

## Outline

    15m Controlled forms
    10m Data Flow
    20m Thinking in React
    ===
    45m Total

### Controlled Forms

* Form submission in Vanilla JS involves obtaining user input by manually grabbing the desired input elements and obtaining their the values of their `value` attributes
	* We still want access to user input in React, but if we do not access the DOM directly, how can make user input accessible to us?
* Controlled components:
  * In HTML, form elements such as `<input>`, `<textarea>`, and `<select>` typically maintain their own state and update it based on user input. In React, mutable state is typically kept in the state property of components, and only updated with `setState()`.
  * We can combine the two by making the React state be the “single source of truth”. Then the React component that renders a form also controls what happens in that form on subsequent user input. An input form element whose value is controlled by React in this way is called a “controlled component”.

  ```js
  //PaintingForm.js

  constructor(){
      super()
      this.state = {
          image: ""
      }
  }

  handleImage = (e) => {
      this.setState({
            image: e.target.value
      })
  }

  render(){
  return(
    <div>
        <h1> Add a new Painting</h1>
        <form>
            <input 
            type="text" 
            name="image" 
            placeholder="ImgURL"
            value={this.state.image} 
            onChange={this.handleImage}/> <br/>

            <input 
            type="text" 
            name="title" 
            placeholder="Title"/><br/>

            <input 
            type="text" 
            name="artist" 
            placeholder="Artist Name"/><br/>

            <input 
            type="text" 
            name="date" 
            placeholder="date"/><br/>

            <input 
            type="text" 
            name="width" 
            placeholder="width"/><br/>

            <input 
            type="text" 
            name="height" 
            placeholder="height"/><br/>

            <input type="submit" value="add new painting"/>
        </form>

      </div>)
      }
    ```

  * Since the `value` attribute is set on our form element, the displayed value will always be `this.state.value`, making the React state the source of truth. Since `handleImage` runs on every keystroke to update the React state, the displayed value will update as the user types.
  * With a controlled component, the input’s value is always driven by the React state. While this means you have to type a bit more code, you can now pass the value to other UI elements too, or reset it from other event handlers.
  * Handling Multiple inputs:
    * When you need to handle multiple controlled `input` elements, you can add a `name` attribute to each element and let the handler function choose what to do based on the value of `event.target.name`.

  ## CFU: Handling Multiple Controlled Inputs

  * What changes would you have to make so that every input element on this form is controlled?
  * Update the code so that text entered in each input element updates the corresponding key/value pair in state.

  * Students may have separate handler functions for each input.  If so introduce the refactor below using a _computed property_ with the name attribute.

  ```js
  //PaintingForm.js
    constructor(){
            super()
            this.state = {
                image: "",
                title: "",
                artist: "",
                date: "",
                width: "",
                height: ""
            }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value //handling multiple input state
        })
    }

    render(){
    return(
    <div>
        <h1> Add a new Painting</h1>
        <form>
            <input 
            type="text" 
            name="image" 
            placeholder="ImgURL"
            value={this.state.image} 
            onChange={this.handleChange}/> <br/>

            <input 
            type="text" 
            name="title" 
            placeholder="Title" 
            value={this.state.title}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="artist" 
            placeholder="Artist Name" 
            value={this.state.artist}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="date" 
            placeholder="date" 
            value={this.state.date}
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="width" 
            placeholder="width"
            value={this.state.width} 
            onChange={this.handleChange}/><br/>

            <input 
            type="text" 
            name="height" 
            placeholder="height"
            value={this.state.height}
            onChange={this.handleChange}/><br/>

            <input type="submit" value="add new painting"/>
        </form>

    </div>)
    }

  ```
  Note how we used the ES6 [computed property name](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#computed_property_names) syntax to update the state key corresponding to the given input name.

### Data Flow

Add new painting to the list of paintings and display it on the DOM.

```js
//App.js
addPainting = (info) => {
  console.log(info) //check console.log to see data from the form
}

// Pass addPainting function as a props to PaintingForm component
 <PaintingForm addPainting={this.addPainting} /> 

//PaintingForm.js
handleSubmit = (e) => {
  e.preventDefault()
  this.props.addPainting(this.state) //sending new painting info back to App component
}

// when form is submitted
<form onSubmit={this.handleSubmit}> 

```

We need to make sure new painting data match the format of other painting data

```js
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
```

Updating state to display new added painting and close form view to display painting list

```js
this.setState({
  paintings: [...this.state.paintings, newPainting], //.push is not used here because it returns length of an array after adding new element
  formView: !this.state.formView //to display paintings after adding a new painting info
})
```
## CFU: Updating votes

* How could you update the code so that adding a vote would update the value on the corresponding painting object in App's state?
  * Think about what you could pass to the addVote() callback that could help you find the right object in `this.state.paintings`
  * Also consider how you will get the addVote() callback from App into each Painting component


### Thinking in React

Go through [this](https://reactjs.org/docs/thinking-in-react.html) doc and explain each steps