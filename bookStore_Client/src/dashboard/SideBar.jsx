import { Sidebar } from "flowbite-react";
import { HiArrowSmRight, HiBookOpen, HiChartPie, HiCloudUpload, HiInbox, HiOutlinePencil, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from '../assets/profile.jpg';


const SideBar = () => {

  return (

    <Sidebar aria-label="Sidebar with logo branding example">
      <Sidebar.Logo href="#" img={userImg} imgAlt="Flowbite logo" >
        Flowbite
      </Sidebar.Logo>
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/upload" icon={HiCloudUpload}>
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiBookOpen}>
            Manage Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/edit-book/:id" icon={HiOutlinePencil}>
            Edit Book
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiShoppingBag}>
            Productsa
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Log In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log Out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}

export default SideBar