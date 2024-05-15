import React from "react";
import { Menu } from "antd";
import { AppstoreOutlined,ShopOutlined,ShoppingCartOutlined, UserOutlined} from "@ant-design/icons"; 
import { useNavigate } from "react-router-dom";

const SideMenu = () => {
    const navigate = useNavigate()
  return (
    <div className="SideMenu">
      <Menu
      onClick={(item)=>{
        navigate(item.key)

      }}
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
