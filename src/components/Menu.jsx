import React, { useContext } from 'react'
import { dataContext } from '../App'


const Menu = () => {

    const {setAppState} = useContext(dataContext)

    return (
        
        <div className='menu'>
            <h1>แบบทดสอบ</h1>
            <button onClick={()=>setAppState('quiz')}>เริ่มทำแบบทดสอบ</button>
        </div>
    )
}

export default Menu