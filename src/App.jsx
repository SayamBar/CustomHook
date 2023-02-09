import { useEffect, useState } from 'react'
import './App.css'
import useCustomhook from './Customhook'
import useFetch from './Fetch'

const API = "https://jsonplaceholder.typicode.com/posts";

function App() {
  const [count, setCount] = useState(0)
  // useCustomhook(count);
  
  const {data, error, loading} = useFetch(API);

  if(loading) return <h1> LOADING... </h1>;

  if(error) return <h1>{error}</h1>

  return (
    <>
      <h1>Custom Hook</h1>
      {/* <button onClick={() => setCount(count+1)}>Increment</button> */}
      <>
      <h2></h2>
      {data.map((item,i) => {
        const {id,title,body} = item;
        return(
          <>
            <h2>{id}</h2>
            <h2>{title}</h2>
            <p>{body}</p>
          </>
        )
      })}
      </>
      {/* <h1>{data?.</h1> */}
    </>
  )
}

export default App
