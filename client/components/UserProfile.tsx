import { useRef, useState, ChangeEvent, useEffect } from "react"
import image1 from "../pages/(public)/download.jpg"
import Image from 'next/image'
import {useParams} from "next/navigation"
import { useRouter } from "next/router"
export default function UserProfile(){
    const inputFile = useRef(null)
    const [file, setFile] = useState<File>();
    const [imgURL, setimgURL] = useState(null)
    const router = useRouter()
    const {username} = router.query
    // const username = useParams();

    // useEffect(()=>{
    //     fetch("databaseurl/{id}")
    // },[])


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
                <div id = "email" className="text-3xl text-center break-words pb-2">email:placeholder{username}@gmail.com</div>
                <div id = "message" className="text-3xl text-center break-words"> <button onClick={handleMessage}>message me</button></div>
            </div>
            <div className="profile-pic-container float-user-elements">
                <input type="text" onChange={(e)=>{setimgURL(e.target.value)}}/>
                <button onClick={handleURLUpdate}>upload URL</button>
                <br></br>
                <input type="file" onChange={handleAvatarChange}/>
                <Image onClick={()=>{console.log("image clicked")}} src = {image1} width='400' height='300' alt="hey" id = "profile-pic"/>
                <div id = "bio">This is where we pull description of the user, made by them</div>
            </div>
        </div>
  )
}