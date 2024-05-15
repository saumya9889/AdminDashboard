import { Card, Space, Table, Statistic, Typography } from "antd";
import {
  ShoppingCartOutlined,
  UserOutlined,
  DollarCircleOutlined,
  ShoppingOutlined,
} from "@ant-design/icons";
import React, { useEffect, useState } from "react";
import { getCustomer, getOrders, getRevenue, getInventory } from "../../../API";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const [orders, setOrders] = useState(0);
  const [inventory, setInventory] = useState(0);
  const [revenue, setRevenue] = useState(0);
  const [customers, setCustomers] = useState(0)

  useEffect(() => {
    getOrders().then(res => {
     setOrders (res.total);
     setRevenue(res.discountedTotal)
    });
    getInventory().then(res => {
      setInventory (res.total)
     });
     getCustomer().then(res => {
      setCustomers (res.total)
     })
  }, [])
   
  return (
    <>
      <Space size={20} direction="vertical">
        <Typography.Title level={4}>Dashboard</Typography.Title>
        <Space direction="horizontal">
          <DashboardCard
            icon={
              <ShoppingCartOutlined
                style={{
                  color: "Maroon",
                  background: "pink",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Orders"}
            value={orders}
          />
          <DashboardCard
            icon={
              <ShoppingOutlined
                style={{
                  color: "#062348",
                  background: "#1100ff52",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Inventory"}
            value={inventory}
          />
          <DashboardCard
            icon={
              <UserOutlined
                style={{
                  color: "#800080",
                  background: "#80008047",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Customers"}
            value={customers}
          />
          <DashboardCard
            icon={
              <DollarCircleOutlined
                style={{
                  color: "green",
                  background: "#00800052",
                  borderRadius: 20,
                  fontSize: 24,
                  padding: 8,
                }}
              />
            }
            title={"Revenue"}
            value={revenue}
          />
        </Space>
        <div>
          <Space>
            <RecentOrders />
            <DashboardChart />
          </Space>
        </div>
      </Space>
    </>
  );
};

const DashboardChart = () => {
  const [revenueData, setRevenueData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    getRevenue().then((res) => {
      const labels = res.carts.map((cart) => {
        return `User-${cart.userId}`;
      });
      const data = res.carts.map((cart) => {
        return cart.discountedTotal;
      });

      const dataSource = {
        labels,
        datasets: [
          {
            label: "Revenue 1",
            data: data,
            backgroundColor: "rgba(255, 0, 0, 1)",
          },
        ],
      };
      setRevenueData(dataSource);
    });
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Order Revenue",
      },
    },
  };

  return (
    <>
    <Card style={{width:500, height:350}}>
      <Bar options={options} data={revenueData} />
      </Card>
    </>
  );
};

export default Dashboard;

export const DashboardCard = ({ icon, title, value }) => {
  return (
    <>
      <Card>
        <Space direction="horizontal">
          {icon}
          <Statistic title={title} value={value} />
        </Space>
      </Card>
    </>
  );
};

export const RecentOrders = () => {
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getOrders().then((res) => {
      setDataSource(res.products);
      setLoading(false);
    });
  }, []);
  return (
    <>
      <Typography.Text>Recent Order</Typography.Text>
      <Table
        columns={[
          {
            title: "Title",
            dataIndex: "title",
          },
          {
            title: "Quantity",
            dataIndex: "quantity",
          },
          {
            title: "Price",
            dataIndex: "discountedPrice",
          },
        ]}
        loading={loading}
        dataSource={dataSource}
        pagination={false}
      ></Table>
    </>
  );
};
