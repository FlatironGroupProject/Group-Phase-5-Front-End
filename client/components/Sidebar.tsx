import Link from 'next/link'
import { useState } from 'react'
// const Sidebar = () => {


export default function Sidebar(){
    const [displayed, setDisplayed] = useState(true)

    if (!displayed){
        return <button className="show-button" onClick={(e)=>{setDisplayed(!displayed)}}>show</button>
        // return null
    }    
    return (
    <ul className = "sidebar">
        <li className = "sidebar-item block"><Link className='link' href="/Home">Home</Link></li>
        <li className = "sidebar-item block"><Link className='link' href="/About">About</Link></li>
        <li className = "sidebar-item block"><Link className='link' href = "/users/2">Navigation 3</Link></li>
        <li className = "sidebar-item block"><Link className='link' href = "/">Navigation 4</Link></li>
        <li><button onClick={(e)=>{setDisplayed(!displayed)}}>hide</button></li>
    </ul>
    )
}