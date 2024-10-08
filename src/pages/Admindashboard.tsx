import { useState } from "react";
import TopNav from "../components/TopNav";
import SideNav from "../components/SideNav";
import Form from "../components/Form"; // Your Form component
import "../style/Dashboard.css";
import "../style/admindashboard.css";
import {
  BsCurrencyDollar,
  BsCashStack,
  BsClipboard2Fill,
  BsTicketPerforated,
} from "react-icons/bs";
import CardComponent from "../components/Card";
import Button from "../components/Button";

export default function Admindashboard() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [showForm, setShowForm] = useState(false); // Toggle for tenant registration form

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  

  const handleRegisterTenant = (formData: any) => {
    // Handle form data submission
    console.log("Form submitted: ", formData);
  };

  return (
    <>
      <TopNav />
      <SideNav openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
      <main className="main2-container">
        <CardComponent
          content="Houses"
          variant="primary"
          Icon={BsCurrencyDollar}
        />
        <CardComponent
          content="Tenants"
          variant="Secondary"
          Icon={BsCashStack}
        />
        <CardComponent
          content="ApartmentBill"
          variant="Danger"
          Icon={BsClipboard2Fill}
        />
        <CardComponent
          content="Payments"
          variant="warning"
          Icon={BsTicketPerforated}
        />

        <Button
          children="Register Tenant"
          className="registertenant-button mt-5"
          onClick={() => setShowForm(!showForm)} // Toggle the form visibility
        />

        {showForm && (
          <div className="form-container mt-5">
            <Form
              fields={[
                { name: "email", type: "email", label: "Tenant Email", placeholder: "Enter tenant email", required: true },
                { name: "password", type: "password", label: "Password", placeholder: "Enter password", required: true },
                { name: "tenantName", type: "text", label: "name", placeholder: "fullName", required: true },
                { name: "tenantPhone", type: "text", label: "number", placeholder: "0712345678", required: true }
            
              ]}
              onSubmit={handleRegisterTenant}
              submitText="Register Tenant"
              className="tenant-registration-form"
            />
          </div>
        )}
      </main>
    </>
  );
}
