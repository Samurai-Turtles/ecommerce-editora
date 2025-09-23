import styles from "./actions.module.css";

export default function Actions({ logged = false }) {
  console.log(logged);

  return (
    <div className={styles.container}>
      <SearchBar />
      <CatalogButton />
      {logged ? (
        <>
          <MyOrdersButton />
          <ShoppingCartIcon />
          <ProfilePicture />
        </>
      ) : (
        <>
          <LoginButton />
        </>
      )}
    </div>
  );
}

function SearchBar() {
  return (
    <input type="text" placeholder="Search" className={styles.search_bar} />
  );
}

function CatalogButton() {
  return <button className={styles.catalog_button}>Catalog</button>;
}

function LoginButton() {
  return <button className={styles.login_button}>Log in</button>;
}

function MyOrdersButton() {
  return <button className={styles.no_background_button}>My Orders</button>;
}

function ShoppingCartIcon() {
  return (
    <button className={styles.no_background_button}>
      <img src="/images/shopping_cart.png" alt="" />
    </button>
  );
}

function ProfilePicture() {
  return <img src="/images/goku.png" alt="Profile" className={styles.profile_picture} />;
}
