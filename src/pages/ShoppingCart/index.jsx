import sampleBookCover from "@/assets/img/sample-book-cover.jpg";

import Button from "@/components/Button";
import Card from "@/components/card/card";
import { TrashIcon } from "@phosphor-icons/react";
import styles from "./shopping-cart.module.css";
import { fetchProducts, formatAsCurrency } from "@/lib/products";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function ShoppingCart() {
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const navigate = useNavigate();

  const handleProductRemoval = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const handleClearCart = () => {
    setProducts([]);
  };

  useEffect(() => {
    const products = fetchProducts();
    setProducts(products);
  }, []);

  useEffect(() => {
    const productSum = products.reduce(
      (acc, current) => acc + current.price,
      0
    );
    setTotalValue(productSum);
  }, [products]);

  return (
    <div className={styles.shoppingCart}>
      {/* Product list */}
      <div className={styles.cartProducts}>
        <h2>My shopping cart</h2>
        <ul>
          {products.map((item) => (
            <Card key={item.id} image={sampleBookCover} style="horizontal">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong className={styles.priceTag}>
                {formatAsCurrency(item.price)}
              </strong>
              <Button
                Icon={TrashIcon}
                label="Remove"
                handleClick={() => handleProductRemoval(item.id)}
              />
            </Card>
          ))}
        </ul>
      </div>

      {/* Costs and delivery info */}
      <div className={styles.cartInfo}>
        <h2>
          Total value: <span>{formatAsCurrency(totalValue)}</span>
        </h2>
        <div className={styles.cartActions}>
          <Button
            Icon={TrashIcon}
            label="Clear cart"
            btnStyle="dimmed"
            handleClick={handleClearCart}
          />
          <Button
            Icon={TrashIcon}
            label="Close order"
            btnStyle="solid"
            handleClick={() => navigate("/payment")}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
