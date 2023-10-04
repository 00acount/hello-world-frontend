import { useEffect, useState } from 'react'
import './App.css'
import { API_URL } from './constants';

function App() {
  const [helloWorld, setHelloWorld] = useState("");
  
  useEffect(() => {
    (async () => {
      const res = await fetch(API_URL);
      console.log(res)
      if (res.status === 200) {
        const helloWorld = await res.text();
        setHelloWorld(helloWorld);
      }
    })()
  }, []);

  return (
    <>
      <h1>{helloWorld}</h1>
    </>
  )
}

export default App
