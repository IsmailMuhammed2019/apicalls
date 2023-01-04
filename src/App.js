import React, {useState, useEffect} from 'react'
import './App.css';

function App() {
  const [data, setData] = useState({})
  const [count, setCount] = useState(1)

  useEffect(() => {
      fetch(`https://swapi.dev/api/people/${count}`)
        .then((res) => res.json())
        .then((newdata) => setData(newdata))
  }, [count])

  return (
    <div className="App">
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <p>{count}</p>
      <button onClick={() => setCount(prev => count + 1)}>Add</button>
    </div>
  );
}

export default App;