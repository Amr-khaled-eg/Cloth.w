import React from "react";
import "./orders.css";
import Order from "../../components/order/order";
import { getOrders } from "../../services/orders";
const Orders = () => {
  const [orders, setOrders] = React.useState([]);
  React.useEffect(async () => {
    try {
      const ordersData = await getOrders();
      setOrders(ordersData);
    } catch (e) {
      console.error(e);
    }
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
