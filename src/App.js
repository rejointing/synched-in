import './App.css';
import { useState, useEffect } from 'react'
import fakeFetch from './utils/fakeFetch'
import Person from './Components/Person';

function App() {
let [people, setPeople] = useState([]) 

async function getPeople() {
  const JSON_Response = await fakeFetch();
  const Javascript_Response = await JSON_Response.json();
  setPeople(Javascript_Response);
  console.log(Javascript_Response)
}

useEffect(() => {
  getPeople();
}, []);


  return (
    <div className="people-div">
      <div style={{display:'flex-wrap justify-content-center'}}>
      { people.map(person => <Person key = {person.id} person={person} />)}
    </div>  
    </div>
  );
}

export default App;
