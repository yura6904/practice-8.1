import { useEffect, useState } from 'react';
import './App.css';
import List from './components/List/List';

function App() {
  const [selectedHum, setSelectedHum] = useState()
  const [data, setData] = useState()

  const selectId = async (id) => {
    let response = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${id}.json`)
    await setSelectedHum(await response.json())
  }
  
  useEffect(() => {
    async function fetchData() {
      let response = await fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json')
      await setData(await response.json())
    }
    fetchData()
  }, [])

  return (
    <div className="App">
      <List data={data} selectId={selectId} selectedHum={selectedHum}/>
    </div>
  );
}

export default App;
