import React from 'react';
import {
  BsCashCoin,
  BsGrid1X2Fill,
  BsCashStack,
  BsTicketPerforated,
  BsClipboard2Fill,
  BsFillGearFill
} from 'react-icons/bs';

interface SidebarProps {
  openSidebarToggle: boolean;
  OpenSidebar: () => void;
}

const SideNav: React.FC<SidebarProps> = ({ openSidebarToggle, OpenSidebar }) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        {/* <div className='sidebar-brand'>
          <BsCart3 className='icon_header'/> My Dashboard
        </div> */}
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <a href="#">
            <BsGrid1X2Fill className='icon'/> Dashboard
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="/products">
            <BsCashCoin className='icon'/> My Bills
          </a>
        </li>
       
        <li className='sidebar-list-item'>
          <a href="/customer">
            <BsCashStack className='icon'/>Payments
          </a>
        </li>
        <li className='sidebar-list-item'>

          <a href="">
            <BsTicketPerforated className='icon'/> Ticket
          </a>
        </li>

        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon'/> Profile
          </a>
        </li>
        <li className='sidebar-list-item'>

          <a href="">
            < BsClipboard2Fill className='icon'/> Policy & Regulation
          </a>
        </li>
      </ul>
    </aside>
  );
};

export default SideNav;