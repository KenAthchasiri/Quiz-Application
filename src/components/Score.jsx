import React, { useContext } from 'react'
import { dataContext } from '../App'
import QuestionsData from '../data/QuestionsData'




const Score = () => {

    
    const {score,setScore,setAppState} = useContext(dataContext)

    const reTest = () =>{
        setScore(0)
        setAppState('quiz')

    }
    return (
        <div className='score'>
            <h1>สรุปผลคะแนน</h1>
            <h2>{score} / {QuestionsData.length}</h2>
            <button onClick={reTest}>ทำแบบทดสอบอีกครั้ง</button>
        </div>  
    )
}

export default Score