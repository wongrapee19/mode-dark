// eslint-disable-next-line
import { createContext, useContext, useState } from "react"
import Switch from "react-switch"
import { ModeContext } from "../App"
const Title = () => {

    const {mode,setMode} = useContext(ModeContext)
 // eslint-disable-next-line
    const toggleSwitch = (checked) => {
        setMode(
            mode === "light" ? "dark" : "light"

        )
    }
    return (
<header className={mode==="dark"?"dark":"light"}> 
    
    <span> Mode :[{mode}] </span>
    <Switch 
    
    onChange={toggleSwitch}
    checked = {mode==="dark"}
    uncheckedIcon={false}
    checkedIcon={false}
    onColor={'#ffa500'}
    />
     </header>

    )
}


export default Title