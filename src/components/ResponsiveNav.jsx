import React from "react";
import logo from "../assets/images/logo.png";
import pho from "../assets/images/pho.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { TbDiscount2 } from "react-icons/tb";
import { HiGlobeAlt } from "react-icons/hi";
import { BsCurrencyDollar } from "react-icons/bs";
import {
  useScroll,
  useAnimatedValue,
  AnimatedBlock,
  interpolate,
} from "react-ui-animate";
import SpeisenToggle from "./SpeisenToggle";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  Sidebar,
  useProSidebar,
  sidebarClasses,
} from "react-pro-sidebar";
export default function ResponsiveNav() {
  return (
    // <div className="bg-black/70 absolute">
    //   <Sidebar>
    //         <div className="l-4 m-3 c-8">
    //             <Link to="/" className="nav-bar--logo admin-logo">
    //                 <img alt="logo" src={logo} />
    //             </Link>
    //         </div>
    //         <Menu
    //         menuItemStyles={{
    //             button: ({ level, active, disabled }) => {
    //                 // only apply styles on first level elements of the tree
    //                 if (level === 0 && active == true)
    //                 {

    //                 };
    //             },
    //             }}
    //         className="header-sidebar_menu">
    //             <SubMenu icon={<AiOutlineShoppingCart/>} defaultOpen component={<Link />} label="Đơn hàng">
    //                 <MenuItem component={<Link to="/admin/carts" />}>Tổng đơn hàng</MenuItem>

    //             </SubMenu>
    //             <SubMenu icon={<BsFillPersonFill/>}  label="Khách hàng">
    //                 <MenuItem component={<Link to="/admin/customers"/>}> Khách hàng </MenuItem>
    //                 <MenuItem component={<Link to="/admin/staffs" />}> Nhân viên </MenuItem>
    //             </SubMenu>
    //             <SubMenu icon={<TbDiscount2/>} component={<Link  />} label="Sản phẩm">
    //                 <MenuItem component={<Link to="/admin/products"/>} >Danh sách sản phẩm</MenuItem>
    //                 <SubMenu label="Chỉnh sửa Sản Phẩm">
    //                     <MenuItem component={<Link to="/admin/addproducts" />}>Thêm sản phẩm</MenuItem>
    //                     <MenuItem component={<Link to="/admin/productbytypes" />}> Loại Sản Phẩm</MenuItem>
    //                 </SubMenu>
    //             </SubMenu>
    //             <SubMenu icon={<HiGlobeAlt/>} component={<Link  />} label="Website">
    //                 <MenuItem component={<Link to="/designwebsite/slide"/>}>Slide</MenuItem>
    //             </SubMenu>
    //             <MenuItem icon={<BsCurrencyDollar/>} component={<Link to="/admin/renevue"  />}>Doanh thu</MenuItem>
    //         </Menu>
    //         </Sidebar>
    // </div>
    <div class="fixed inset-y-0 z-10 flex w-80 ">
      <svg
        class="absolute inset-0 w-full h-full text-black/70"
        style={{ filter: "drop-shadow(10px 0 10px #00000030)" }}
        preserveAspectRatio="none"
        viewBox="0 0 309 800"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M268.487 0H0V800H247.32C207.957 725 207.975 492.294 268.487 367.647C329 243 314.906 53.4314 268.487 0Z" />
      </svg>

      <div class="z-10 flex flex-col flex-1">
        <div class="flex items-center justify-between flex-shrink-0 w-full p-4">
          <Link to="/" className="nav-bar--logo admin-logo">
            <img alt="logo" src={logo} />
          </Link>

          {/* Close sidebar button */}
          <button class="p-1 rounded-lg focus:outline-none focus:ring mr-6">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF8D00"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span class="sr-only">Close sidebar</span>
          </button>
        </div>
        {/* Content of sideBar */}
        <nav class="flex flex-col flex-1 w-64 p-4 mt-4">
          <a href="#" class="flex items-center space-x-2">
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#FF8D00"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Home</span>
          </a>
        </nav>
        <div class="flex-shrink-0 p-4">
          <button class="flex items-center space-x-2">
            <svg
              aria-hidden="true"
              class="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
              />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
}
