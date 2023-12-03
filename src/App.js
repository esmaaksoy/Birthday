import { useState } from 'react';
import './App.css';
import List from "./List";
import data from "./data";
function App() {
  const [people,setPeople] = useState(data)
  return (
    <main>
    <div className="container">
      <h3>The birthdays of my {people.length} favorite authors. </h3>
     <List people={people}/>
     <button onClick={() => setPeople([])}>clear all</button>
    </div>
    </main>
  );
}

export default App;
