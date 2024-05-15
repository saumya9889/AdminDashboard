import React from "react";
import { MailOutlined, BellFilled } from "@ant-design/icons"; // Import the icons

import Logo from "./../../assets/logo.webp";

import { Badge, Space, Typography } from "antd";

const Header = () => {
    const fontSize = 24; // Define fontSize variable

    return (
        <div className="Header">
           <img src={Logo} width={40} alt="Logo" />
           <Typography.Title>Saumya Dashboard</Typography.Title>
           <Space>
               <Badge count={20} dot>
                   <MailOutlined style={{fontSize: 24}} />
               </Badge>
               <Badge>
                   <BellFilled style={{fontSize: fontSize}} />
               </Badge>
           </Space>
        </div>
    );
};

export default Header;
