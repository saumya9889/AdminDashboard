import { Space, Avatar, Rate, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getCustomer } from "../../../API";

const Customer = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getCustomer().then((res) => {
      setDataSource(res.users);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Customer</Typography.Title>
        <Table
          columns={[
            {
              title: "Photo",
              dataIndex: "image",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            { 
                title: "First Name",
                 dataIndex: "firstName"
                  },
            { 
                title: "Last Name", 
                dataIndex: "lastName" 
                },
            {
              title: "Email",
              dataIndex: "email",
            
            },
            {
              title: "Phone",
              dataIndex: "phone",
            },
            { 
                title: "Address",
                 dataIndex: "address",
                 render:(address)=>{
                    return<span>{address.address}, {address.city}</span>
                 } 
                 },
          ]}
          pagination={{
            pageSize: 6,
          }}
          loading={loading}
          dataSource={dataSource}
        ></Table>
      </Space>
    </>
  );
};

export default Customer;
