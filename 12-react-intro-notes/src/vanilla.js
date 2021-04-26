// import React from 'react';
// import ReactDOM from 'react-dom';

// ReactDOM.render(React.createElement('h1'), document.getElementById('main'));

// mention that we won't quite talk about
// this second arg, the 'props' yet
// const myHello = React.createElement('h1', {}, 'hello')
// debugger

// ReactDOM.render(
//   myHello,
//   document.getElementById('main')
//   );

// const myCreateElement = (type, props = {}, children) => {
//   return {
//     $$typeof: Symbol.for('react.element'),
//     type: type,
//     props: { children: children },
//     ref: null
//   };
// };
// ReactDOM.render(
//   myCreateElement('h1', {}, 'hello'),
//   document.getElementById('main')
//   );

// ReactDOM.render(
//   myCreateElement('div', {}, [
//     myCreateElement('h1', {}, 'My Title'),
//     myCreateElement('p', {}, 'some text of article')
//   ]),
//   document.getElementById('main')
// );


// const Article = props => {
//   return myCreateElement('div', {}, [
//     myCreateElement('h1', {}, props.title),
//     myCreateElement('p', {}, props.text)
//   ]);
// };

// ReactDOM.render(
//   Article({ title: 'Some News', text: 'probably something bad...' }),
//   document.getElementById('main')
// );

// const myCreateElement = (type, props = {}, children) => {
//   return {
//     $$typeof: Symbol.for('react.element'),
//     type: type,
//     props: { ...props, children: children },
//     ref: null
//   };
// };

// const Article = props => {
//   // show how we'll see this in the HTML
//   // virtual dom = picture of what html should look like
//   return myCreateElement('div', { className: 'article' }, [
//     myCreateElement('h1', { className: 'header' }, props.title),
//     myCreateElement('p', { className: 'body' }, props.text)
//   ]);
// };

// ReactDOM.render(
//   Article({ title: 'Some News', text: 'probably something bad...' }),
//   document.getElementById('main')
// );

const Navbar = props => {
  // ...
  return React.createElement('div', {className: `ui inverted ${props.color} menu`}, [
    React.createElement('a', {className: 'item'}, [
      React.createElement('h2', {className: 'ui header'}, [
        React.createElement('i', {className: `${props.icon} icon`}, null),
        React.createElement('div', {className: 'content'},  props.title),
        React.createElement('div', {className: 'sub header'}, props.description)
      ])
    ])
  ])
};

ReactDOM.render(
  Navbar({
    title: 'Paintr',
    icon: 'paint brush',
    color: 'green',
    description: 'Make collections of art'
  }),
  document.getElementById('main')
);