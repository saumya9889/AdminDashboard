import { Space, Avatar, Rate, Table, Typography } from "antd";
import React, { useState, useEffect } from "react";
import { getProducts } from "../../../API";

const Inventory = () => {
  const [loading, setLoading] = useState(false);
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Inventory</Typography.Title>
        <Table
          columns={[
            {
              title: "Thumbnail",
              dataIndex: "thumbnail",
              render: (link) => {
                return <Avatar src={link} />;
              },
            },
            { title: "Title", dataIndex: "title" },
            {
              title: "Price",
              dataIndex: "price",
              render: (value) => <span>${value}</span>,
            },
            {
              title: "Rating",
              dataIndex: "rating",
              render: (rating) => {
                return <Rate value={rating} allowHalf disabled />;
              },
            },
            { title: "Stock", dataIndex: "stock" },

            { title: "Brand", dataIndex: "brand" },
            { title: "Category", dataIndex: "category" },
          ]}
          pagination={{
            pageSize: 7,
          }}
          loading={loading}
          dataSource={dataSource}
        ></Table>
      </Space>
    </>
  );
};

export default Inventory;
