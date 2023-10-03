import '../App.css'
import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const baseURL = "https://2y6i6tqn41.execute-api.ap-northeast-1.amazonaws.com/threads?offset=7";

export const Home = () => {
    const [thread, setThread] = useState([]);
  
    useEffect(() => {
      axios.get(baseURL)
      .then((respons) => {
        console.log(respons.data)
        setThread(respons.data)
      }) 
    }, [])

    return(
        <div className='home'>
            <h1>新着スレッド</h1>
            <ul>
            {thread.map(( item, index ) => (
                <li key={ index }>{ item.title }</li>
            ))}
            </ul>
        </div>
  )
}
export default Home;