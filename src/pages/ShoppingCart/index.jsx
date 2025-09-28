import sampleBookCover from "@/assets/img/sample-book-cover.jpg";
import pixLogomark from "@/assets/img/pix-logomark.png";
import creditCard from "@/assets/img/mastercard.png";

import Button from "@/components/Button";
import Card from "@/components/card/card";
import Modal from "@/components/Modal";
import { fetchProducts, formatAsCurrency } from "@/lib/products";
import { TrashIcon, CheckFatIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import styles from "./shopping-cart.module.css";
import Header from "@/components/header/header";

function ShoppingCart() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [isPaymentModalOn, setIsPaymentModalOn] = useState(false);

  const handleProductRemoval = (id) => {
    setProducts(products.filter((product) => product.id != id));
  };

  const handleClearCart = () => {
    setProducts([]);
  };

  const handlePaymentModalChange = () => {
    setIsPaymentModalOn(!isPaymentModalOn);
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
    <>
      <Header />
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
              Icon={CheckFatIcon}
              label="Close order"
              btnStyle="solid"
              handleClick={handlePaymentModalChange}
            />
          </div>
        </div>
        {isPaymentModalOn && (
          <Modal handleCloseModal={() => setIsPaymentModalOn(false)}>
            <div className={styles.paymentModal}>
              <span>Select payment method</span>
              <div className={styles.paymentModalOptions}>
                <Card image={pixLogomark} handleClick={() => navigate("/pix")}>
                  <strong>Pix</strong>
                </Card>
                <Card
                  image={creditCard}
                  handleClick={() => navigate("/credit-card")}
                >
                  <strong>Credit card</strong>
                </Card>
              </div>
            </div>
          </Modal>
        )}
      </div>
    </>
  );
}

export default ShoppingCart;
