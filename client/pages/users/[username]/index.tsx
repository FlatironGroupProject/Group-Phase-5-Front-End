// import Sidebar from "../../../components/UserProfile"
import React from 'react';
import Head from 'next/head';
import UserProfile from "../../../components/UserProfile";
import { useRouter } from "next/router"

// import "../../../public/download.jpg"
export default function index(){

  return (
      <UserProfile  isMyProfile={false}></UserProfile>
  )   
}