import type { ReactNode } from "react"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
        <Sidebar/>
      <div>
        <Navbar />
        <main>{children}</main>
      </div>
    </>
  )
}