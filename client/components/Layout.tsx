import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
        <Navbar/>
        <main>{children}</main>
    </>
  )
}