import logo from './logo.svg';
import {useEffect} from 'react'
import './App.css';

function App() {

  const RACK_URL = 'http://localhost:9393'

  useEffect(() => {
    // async function fetchData() {
    //   const res = await fetch(RACK_URL + '/hello', {mode: 'no-cors'})
    //   console.log('res: ', res);
    //   let data = await res.json()
    //   console.log(data);
    // }
    // fetchData()
    fetch(RACK_URL + '/hello')
    .then(res => res.json())
    .then(console.log)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
