import Header from "@/components/header/header";
import styles from "./products.module.css";
import { useLocation, useNavigate } from "react-router";
import { useState } from "react";
import Card from "@/components/card/card";
import book1 from "@/assets/img/little-book-of-semaphores.jpg";

function ProductsPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const isLoggedFromNav = location.state?.isLogged ?? false;
  const [isLogged] = useState(isLoggedFromNav);

  return (
    <div>
      <Header logged={isLogged}/>
      <div className={styles.productsPage}>
        <div className={styles.categories}></div>
        <div className={styles.content}>
          <div className={styles.sorting}>

          </div>
          <div className={styles.products}>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
            <Card image={book1}>
              <p>The Little Book of Semaphores</p>
              <strong>$ 22.00</strong>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductsPage;
