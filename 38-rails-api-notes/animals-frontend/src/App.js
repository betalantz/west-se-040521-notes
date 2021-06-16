import {useState, useEffect} from 'react'
import './App.css';
import PageHeader from './components/PageHeader'
import AnimalsTable from './components/AnimalsTable'
import AnimalForm from './components/AnimalForm'

function App() {

  const baseURL = 'http://localhost:3000/api/v1/animals'

  const [animals, setAnimals] = useState([])
  useEffect(()=> {
    fetch(baseURL)
    .then(r => r.json()).
    then(animals => setAnimals(animals))
    },
  [])

  const addAnimal = (animal) => {
    // console.log(animal)
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(animal)
    }
    fetch(baseURL, config)
    .then(r => r.json())
    .then(newAnimal => setAnimals([...animals, newAnimal]))
  }

  return (
    <>
      <PageHeader />
      <AnimalForm addAnimal={addAnimal}/>
      <AnimalsTable animals={animals}/>
    </>
  );
}

export default App;
