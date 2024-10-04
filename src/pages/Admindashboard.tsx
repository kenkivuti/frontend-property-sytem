import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import { useState } from "react";
import '../style/Dashboard.css';




export default function Admindashboard(){

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return(
        <>
        <TopNav/>
        <SideNav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main className="main-container">
          
        </main>
       
        </>
    )
}