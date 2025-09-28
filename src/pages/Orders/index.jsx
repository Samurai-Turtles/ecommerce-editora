import Header from "@/components/header/header";
import Card from "@/components/card/card";
import styles from "./orders.module.css";

function OrdersPage() {
  const isLogged = true; // The user should not be able to access this page when not logged in

  return (
    <div>
      <Header logged={isLogged} />
      <div className={styles.ordersPage}>
        <h1>Your orders</h1>
        <div className={styles.orders}></div>
      </div>
    </div>
  );
}

export default OrdersPage;
