import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import { useState } from "react";
import '../style/Dashboard.css';
import { BsCurrencyDollar, BsCashStack, BsClipboard2Fill, BsTicketPerforated } from 'react-icons/bs';
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
        <main className="main-container" >
          <CardComponent
           content="Housebills"
           variant="primary"
           Icon={BsCurrencyDollar}
          />
          <CardComponent
          content="Payments"
          variant="Secondary"
          Icon={BsCashStack}
          />
          <CardComponent
          content="Policies"
          variant="Danger"
          Icon={BsClipboard2Fill}
          />
          <CardComponent
          content="Tickets"
          variant="warning"
          Icon={BsTicketPerforated}
          />
        </main>
        <SampleData/>
        </>
    )
}