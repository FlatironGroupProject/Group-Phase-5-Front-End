import Link from 'next/link'
// const Sidebar = () => {


export default function Sidebar(){
    

    return (
    <ul className = "sidebar">
        <li className = "sidebar-item block"><Link className='link' href="/Home">Home</Link></li>
        <li className = "sidebar-item block"><Link className='link' href="/About">About</Link></li>
        <li className = "sidebar-item block"><Link className='link' href = "/users/2">Navigation 3</Link></li>
        <li className = "sidebar-item block"><Link className='link' href = "/">Navigation 4</Link></li>
    </ul>
    )
}