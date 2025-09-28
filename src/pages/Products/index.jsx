import book1 from "@/assets/img/little-book-of-semaphores.jpg";
import Button from "@/components/Button";
import Card from "@/components/card/card";
import Header from "@/components/header/header";
import { fetchProducts } from "@/lib/products";
import { PlusCircleIcon } from "@phosphor-icons/react";
import { useState } from "react";
import { useLocation } from "react-router";
import styles from "./products.module.css";

function ProductsPage() {
  const location = useLocation();
  const isLoggedFromNav = location.state?.isLogged ?? false;
  const [isLogged] = useState(isLoggedFromNav);

  const products = fetchProducts();

  return (
    <div>
      <Header logged={isLogged} />
      <ul className={styles.productGrid}>
        {products.map((item) => (
          <Card key={item.id} image={book1}>
            <h3>{item.title}</h3>
            <strong className={styles.priceTag}>{item.price}</strong>
            <Button
              Icon={PlusCircleIcon}
              btnStyle="dimmed"
              label="Add to cart"
              handleClick={() => alert("Add item to cart!")}
            />
          </Card>
        ))}
      </ul>
    </div>
  );
}

export default ProductsPage;
