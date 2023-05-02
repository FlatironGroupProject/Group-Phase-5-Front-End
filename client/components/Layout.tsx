import type { ReactNode } from "react"
import Navbar from "./Navbar"
import SideBar from "./SideBar"

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <div className="flex mt-16">
        <div className="bg-gray-100 w-1/ h-screen">
          <SideBar />
        </div>
        <main className="flex-grow">{children}</main>
      </div>
    </>
  )
}
