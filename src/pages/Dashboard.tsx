import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import { useState } from "react";
import '../style/Dashboard.css';
import CardComponent from '../components/Card';
import SampleData from '../components/testchart';



export default function Dashboard(){

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
      setOpenSidebarToggle(!openSidebarToggle)
    }

    return(
        <>
        <TopNav/>
        <SideNav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main className="main-container">
          <CardComponent/>
        </main>
        <SampleData/>
        </>
    )
}