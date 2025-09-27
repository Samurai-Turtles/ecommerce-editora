import sampleBookCover from "@/assets/img/sample-book-cover.jpg";

import Button from "@/components/Button";
import Card from "@/components/card/card";
import { TrashIcon } from "@phosphor-icons/react";
import styles from "./shopping-cart.module.css";
import { fetchProducts } from "@/lib/products";

function ShoppingCart() {
  const products = fetchProducts();

  return (
    <div className={styles.shoppingCart}>
      {/* Product list */}
      <div className={styles.cartProducts}>
        <h2>My shopping cart</h2>
        <ul>
          {products.map((item) => (
            <Card key={item.id} image={sampleBookCover}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <strong className={styles.priceTag}>{item.price}</strong>
              <Button Icon={TrashIcon} label="Remove" handleClick={() => alert("Remove item from cart!")} />
            </Card>
          ))}
        </ul>
      </div>

      {/* Costs and delivery info */}
      <div className={styles.cartInfo}>
        <h2>
          Total value: <span>$ 0,00</span>
        </h2>
        <div className={styles.cartActions}>
          <Button
            Icon={TrashIcon}
            label="Clear cart"
            btnStyle="dimmed"
            handleClick={() => alert("Clear cart")}
          />
          <Button
            Icon={TrashIcon}
            label="Close order"
            btnStyle="solid"
            handleClick={() => alert("Close order")}
          />
        </div>
      </div>
    </div>
  );
}

export default ShoppingCart;
