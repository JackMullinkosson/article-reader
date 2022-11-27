import React, { useEffect, useState } from 'react'
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStories } from './actions'
import { wordList } from './components/wordList';



function App() {
const [query, setQuery] = useState('')

const stories = useSelector((state)=>state)
const dispatch = useDispatch();
const handleClick = (query) => {
  dispatch(fetchStories(query))
}

console.log('stories', stories)
// console.log(wordList.values)

//split article content into an array
//split word list into thousands

//it should just give back a bunch of data like

// {
//   '0-1000': '82%'
//   '1-2000': '8%'
//   '2-3000': '2%'
//   '8-9000': '1%'
// }

//only return articles that contain over 90% in the top 2000 most common 



  return (
    <div>
      <h1>Search for articles</h1>
      <input type="text" onChange={(e)=>setQuery(e.target.value)}></input>
      <button onClick={()=>handleClick(query)}>Submit</button>
      <div>{stories}</div>
    </div>
    
  );
}

export default App;
