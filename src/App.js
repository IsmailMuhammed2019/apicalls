import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState({})

  React.useEffect(() => {
    console.log("it's working")
      fetch('https://swapi.dev/api/people/1')
        .then((res) => res.json())
        .then((newdata) => setData(newdata))
  }, [])

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default App;