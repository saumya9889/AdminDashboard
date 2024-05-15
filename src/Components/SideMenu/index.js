import React, {useEffect, useState} from "react";
import { Menu } from "antd";
import { AppstoreOutlined,ShopOutlined,ShoppingCartOutlined, UserOutlined} from "@ant-design/icons"; 
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/")
useEffect(() => {
  const pathname= location.pathname
  setSelectedKeys(pathname)
}, [location.pathname])


    const navigate = useNavigate()
  return (
    <div className="SideMenu">
      <Menu
      className="SideMenuVertical"
      mode="vertical"
      onClick={(item)=>{
        navigate(item.key)

      }}
        selectedKeys={[selectedKeys]}
      
        items={[
          {
            key: "/",
            icon:<AppstoreOutlined />,
            label: "Dashboard",
          },
          {
            key: "/inventory",
            icon:<ShopOutlined />,
            label: "Inventory",
          },
          {
            key: "Orders",
            icon: <ShoppingCartOutlined />,
            label: "Orders",
          },
          {
            key: "/customers",
            icon: <UserOutlined />,
            label: "Customers",
          },
          
        ]}
      ></Menu>
    </div>
  );
};

export default SideMenu;
