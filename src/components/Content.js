import { useContext } from 'react'
import { ModeContext } from '../App'
import light from '../image/light.svg'
import dark from '../image/dark.svg'
const Content = () => {
    // eslint-disable-next-line
    const {mode} = useContext(ModeContext)
    return (
      
        <main className={mode==="dark"?"dark":"light"}>
            <div>
            <div className='mobile'>
            <img src={mode==="dark"?dark:light} alt="logo" />
         
            </div>
                <h1> Wongrapee Lism </h1>
                <p>2 Mode with React</p>
       
            </div>
        <br />
        <div className='destop'>
        <img src={mode==="dark"?dark:light} alt="logo" /> 

 
        </div>
          
        </main>

    
    )


}

export default Content