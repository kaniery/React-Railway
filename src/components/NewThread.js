import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


export const Newthread = () => {
    return(
        <div className='newthread'>
            <h1>スレッド新規作成</h1>
            <p>
                <input type="text" name="threadname" className='threadtitle' placeholder={`スレッドタイトル`}/>
            </p>
            <Link to={`/`}><span className='backhome'>ホームに戻る</span></Link>
            <button type='submit' name='createthread' className='createbutton'>作成</button>
        </div> 
    )
}
export default Newthread;