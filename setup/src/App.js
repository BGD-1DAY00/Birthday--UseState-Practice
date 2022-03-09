import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [person, setPerson] = useState(data)
  const fetch = async()=>{
    const response = await fetch()
    const data = await response.json()
    return data;
  }
  return(
    <main>
      <section className="container">
        <h3>{person.length} Birthdays Today</h3>  
        <List person={person}/>
        <button onClick={()=>setPerson([])}>
          Clear All</button>
      </section>
    </main>
  )
}

export default App;
