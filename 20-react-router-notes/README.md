# React Router

## SWBATs
* Understand how **client side routing** works
* Create **a new route** from one component to another component
* Send **router-props and props** through the new route
* Use **<Link/>** and **history.push()** to go to different route

## Resources
* [React Router Quickstart](https://reacttraining.com/react-router/web/guides/quick-start)
* [Learn's Intro to Client-Side Routing](https://github.com/learn-co-curriculum/react-introduction-to-react-router)
* [A Simple React Router v4 Tutorial](https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf)

## Outline

    10m Theoretical Prerequisites
    5m But what does React Router Actually Do?
    5m Setup and Components
    25m Using the Router Components
    ===
    45m Total

### Theoretical Prerequisites

##### Static vs. Dynamic Routing

Static routing is what we're used to with json-server (?) /*Rails*/. Basically, we define the routes beforehand, and then render their actions separately.

React Router is Different. Basically, the app "renders" routes _while_ rendering all of the JSX. This means no external `routes.*` configuration.

##### Client-side routing

Now that the React stack is handling routing, that means none of our routes require a new `GET` request to the backend to get that page's HTML. This allows us to enforce the "Single Page App", since we can render the new route's page without refreshing.

##### Why do we even need routes?

* The user can use forward/back to navigate your app
* The user can navigate via urls
* We can make urls describe the action that the user might be taking

##### What are the drawbacks to client-side routing?

* We're loading all of our frontend at once, so it might add to the initial load time
* We have to design all of our routes to be coupled with our component structure (which can be a good thing long-term)

### But what does React Router Actually Do?

Ultimately, we're still in a Single-Page application. Show that you can use vanilla JS to change the route in the console (or terminal) using the following commands from the Browser API.


```js
window.history.pushState({}, null, 'page');
window.history.back();
```
React Router wraps this functionality in components that make it easy to transform the browser's URL.


### Setup and Components

You can use `create-react-app` in conjunction with `react-router`, just install with `yarn add react-router-dom` or `npm install react-router-dom`.

Now, we can add the requisite components with

```js
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
```

#### Router

We'll use this in one place in our application (and one place only). Very top level, essentially listening for when the route changes, and making that info accessible.

### Using the Router Components

Go through the process of building a app with routing. Start by wrapping your top-level app in the router in `app.js`:

```jsx
<BrowserRouter>
  <NavBar />
</BrowserRouter>
```
Explain how routes are different but `NavBar` is still there.

#### Route

Conditionally render a certain component based on what the route looks like. Explain how we are removing conditional rendering and using routes.

```js
// App.js
<Route path="/paintings/about" component={About} />

{ url matches '/paintings/about' ? show About component : null }

```
How to send props with routes?

If we want to pass other props into a component through a Route, instead of passing `component`, we can pass a prop called `render`. The render prop is a function that the Route calls to decide what to show.

```js
// App.js

<Route path="/paintings/new" render={(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>} />
```
explain `routeProps` when you explain redirect(`history.push()`).


#### Link

Changes the url we see in the browser, must have a 'to' prop.

```js
// PaintingList.js 
<Link to="/paintings/new"> Add a new painting</Link>

// PaintingForm.js
<Link to="/paintings"> Go to Painting List </Link>

```


#### Switch

Pick one of the following routes (the first that matches), don't look at the others (like an if/ else if/ else if).

```js
// App.js
<Switch>
    <Route path="/paintings/about" component={About} />
    <Route path="/paintings/new" render={(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>} />
    <Route path="/paintings" render={(routeProps) => <PaintingsList {...routeProps} paintings={this.state.paintings}/>} />
  </Switch>
```

#### Redirect

Forces a redirect to a particular route. Redirect after adding a new painting. Go thorugh `routeProps`.

```js
// PaintingForm.js
this.props.history.push("/paintings")
```

### Route `render` prop

Revist the `routeProps` object passed to the `render` prop callback

```js
<Route path="/paintings/new" render={(routeProps) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>} />
```

If we want to access the match or location data, we can! It comes in as the argument to the render prop.


```js
<Route path="/paintings/new" render={(match, location, history) => <PaintingForm {...routeProps} addPainting={this.addPainting}/>} />
```

### Other render props

We have access to more than just `match`!

`location` tells us about the current url.

`history` is a wrapped-up version of the `window.history` API. It gives us:
- previous locations the browser has been to
- functions to push a location onto the history stack

### `withRouter`

If we want access to `location`, `match`, and `history` in some other component, we can use the `withRouter` function to pass them in as props.

```js
import { withRouter } from 'react-router-dom'

class NeedsTheInfo extends React.Component {
  render() {
    <div>{this.props.location}</div>
  }
}

export default withRouter(NeedsTheInfo);
```

Now you can make your app render different components using `<Render />` At this stage, it helps to have a separation of information and navigation, so the links can live on their own.