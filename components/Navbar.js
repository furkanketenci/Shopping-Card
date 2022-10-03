import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";



const Navbar = () => {
 
  const {cart} = useContext(CartContext)

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link href="/">
            <a className={styles.link}>Romaniya Shop</a>
          </Link>
        </div>
      </div>

      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href="/">
              <a className={styles.link}>Menü</a>
            </Link>
          </li>
          {/* <li className={styles.item}>
            <Link href="/products">
              <a className={styles.link}>Products</a>
            </Link>
          </li>
          <li className={styles.item}>
            <Link href="/comingsoon">
              <a className={styles.link}>Coming Soon</a>
            </Link>
          </li> */}
        </ul>
      </div>

      <div className={styles.wrapper}>
        <div className={styles.card}>
          <Link href="/cart">
            <a>
              <Image src="/img/cart.png" width="30px" height="30px" />
              <div className={styles.counter}>{cart.length}</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
