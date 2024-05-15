import React, { useEffect, useState } from "react";
import { MailOutlined, BellFilled } from "@ant-design/icons"; // Import the icons

import Logo from "./../../assets/logo.webp";

import { Badge, Drawer, fontSize, List, Space, Typography } from "antd";
import { getComments, getOrders } from "../../API";

const Header = () => {
  const [comments, setComments] = useState(0);
  const [commentsOpen, setCommentsOpen] = useState(false);
  const [orders, setOrders] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false)
 

  useEffect(() => {
    getComments().then((res) => {
      setComments(res.comments);
    });
    getOrders().then((res) => {
      setOrders(res.products);
    });
  }, []);

  return (
    <div className="Header">
      <img src={Logo} width={40} alt="Logo" />
      <Typography.Title>Saumya Dashboard</Typography.Title>
      <Space>
        <Badge count={comments.length} dot>
          <MailOutlined style={{ fontSize: 24 }} onClick={()=>{
            setCommentsOpen (true)
          }} />
        </Badge>
        <Badge count={orders.length}>
          <BellFilled style={{ fontSize: 24 }}  onClick={()=>{
            setNotificationOpen (true)
          }}/>
        </Badge>
      </Space>
      <Drawer title="Comments" open={commentsOpen} onClose={()=>
        {
          setCommentsOpen(false)
        }}
        maskClosable
      >
        <List dataSource={comments} renderItem={(item)=>
            {
              return <List.Item>{item.body}</List.Item>
            }
        }></List>
      </Drawer>
      <Drawer title="Notifications" open={notificationOpen} onClose={()=>
        {
          setNotificationOpen(false)
        }}
        maskClosable
      >
        <List dataSource={orders} renderItem={(item)=>
            {
              return <List.Item><Typography.Text strong>{item.title}</Typography.Text> has been ordered!</List.Item>
            }
        }></List>
      </Drawer>
    </div>
  );
};

export default Header;
