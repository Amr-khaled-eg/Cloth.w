import React from "react";
import "./orders.css";
import Order from "../order/order";
const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(async () => {
    const res = await fetch("http://localhost:8080/orders", {
      headers: { authorization: sessionStorage.getItem("token") },
    });
    const ordersData = await res.json();
    setOrders(ordersData.content.orders);
  }, []);
  return (
    <div className="orders-container">
      {orders.map((order, i) => {
        return <Order order={order} key={i} />;
      })}
    </div>
  );
};
export default Orders;
