import Header from "@/components/header/header";
import Card from "@/components/card/card";
import styles from "./orders.module.css";
import sampleBookCover from "@/assets/img/sample-book-cover.jpg";
import { fetchProducts, formatAsCurrency } from "@/lib/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function OrdersPage() {
  const isLogged = true; // The user should not be able to access this page when not logged in
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const statuses = {
    Delivered: styles.statusDelivered,
    "En route": styles.statusEnRoute,
  };

  useEffect(() => {
    const products = fetchProducts();
    setProducts(products);
  }, []);

  return (
    <div>
      <Header logged={isLogged} />
      <div className={styles.ordersPage}>
        <div className={styles.orders}>
          <h1>Your orders</h1>
          <ul className={styles.products}>
            {products.map((item) => (
              <Card key={item.id} image={sampleBookCover} style="horizontal">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <p className={statuses[item.status]}>{item.status}</p>
                <p>
                  <em>Units: 10</em>
                </p>
                <strong className={styles.priceTag}>
                  {formatAsCurrency(item.price)}
                </strong>
              </Card>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrdersPage;
