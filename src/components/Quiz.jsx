import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from '../App'
import QuestionsData from '../data/QuestionsData'


const Quiz = () => {
    const [current,setCurrent] = useState(0)
    const [selectChoice,setSelectChoice] = useState('')
    const {score,setScore,setAppState} = useContext(dataContext)

    

    const checkAnswer = () =>{
        if(selectChoice !== ''){
            if(selectChoice === QuestionsData[current].answer){
                setScore(score+1)
                nextQ()
                
            }else{
                nextQ()
            }
        } 
    }

    const nextQ = () =>{
        setSelectChoice('')
        if (current===QuestionsData.length-1){
            setAppState('score')
        } else {
            setCurrent(current+1)
        }
        
        
        
    }
    
    useEffect(()=>{
        checkAnswer()
        
    },[selectChoice])
    return (
        <div className='quiz'>
            <h1>{QuestionsData[current].question}</h1>
            <div className='choices'>
                <button onClick={()=>setSelectChoice('A')}>{QuestionsData[current].A}</button>
                <button onClick={()=>setSelectChoice('B')}>{QuestionsData[current].B}</button>
                <button onClick={()=>setSelectChoice('C')}>{QuestionsData[current].C}</button>
                <button onClick={()=>setSelectChoice('D')}>{QuestionsData[current].D}</button>
            </div>
            <p>{`${current+1} / 5`}</p>
        </div>
    )
}

export default Quiz