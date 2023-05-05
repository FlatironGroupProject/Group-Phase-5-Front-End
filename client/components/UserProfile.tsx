import { useRef, useState, ChangeEvent, useEffect } from "react"
import image1 from "../pages/(public)/download.jpg"
import Image from 'next/image'
import {useParams} from "next/navigation"
import { useRouter } from "next/router"
export default function UserProfile({isMyProfile}){
    const inputFile = useRef(null)
    const [file, setFile] = useState<File>();
    const [imgURL, setimgURL] = useState(null)
    const router = useRouter()
    let username = null
    if (isMyProfile){
        //In future, add a fetch/get here to get username from cookies or database
        username="testing"
    }
    else{
        username = router.query["username"]
    }


    let temp = {"username":username, "email":`${username}@gmail.com`, "bio":"im a cool dude"}

    const [user, setUser] = useState(temp)
    const [loaded, setLoaded] = useState(true)

    // For use once hooked up to backend
    // useEffect(()=>{
    //     fetch("databaseurl/users/{id}").then(resp=>{if resp.status ==404 return null;return resp.json()})
    //      .then(u=>setUser(u)).then(_=>setLoaded(true))
    // },[])

    // Avoids issue of username being undefined since router.query is async function. 
    useEffect(()=>{
            let temp = {"username":username, "email":`${username}@gmail.com`, "bio":"im a cool dude"}
            setUser(temp)
            return;

    },[username])

    function handleAvatarChange(e: ChangeEvent<HTMLInputElement>){
        
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
        handleUpload()
        
        if (!file) {
            return;
        }
        

    }

    function handleUpload(){

    }

    function handleMessage(){
        console.log("messaged")
    }

    
    function handleURLUpdate(){
        // perform fetch statement to database and change image url to this
        fetch("databaseurl", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({"image": imgURL})
        })

        
    }
    
    return (
        <div className="user-page min-h-screen bg-gray-100 justify-center pt-32">
            <div id="user-info" className=" float-user-elements">
                <div className="text-3xl text-center break-words pb-2">Name:</div>
                <div id = "username" className="text-3xl text-center break-words pb-2">username:{username}</div>
                <div id = "email" className="text-3xl text-center break-words pb-2">email:{loaded?user["email"]:"placeholder" }</div>
                <div id = "message" className="text-3xl text-center break-words"> <button onClick={handleMessage}>message me</button></div>
            </div>
            <div className="profile-pic-container float-user-elements">
                <input type="text" onChange={(e)=>{setimgURL(e.target.value)}}/>
                <button onClick={handleURLUpdate}>upload URL</button>
                <br></br>
                <input type="file" onChange={handleAvatarChange}/>
                <Image onClick={()=>{console.log("image clicked")}} src = {image1} width='400' height='300' alt="hey" id = "profile-pic"/>
                <div id = "bio">{loaded? user["bio"]:"This is where we pull description of the user, made by them"}</div>
            </div>
        </div>
  )
}