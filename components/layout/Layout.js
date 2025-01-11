import Link from "next/link";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h2>CRM Project</h2>
        <Link href="/add-customer">Add customer</Link>
      </header>
      <div className={styles.main}>{children}</div>
      <footer className={styles.footer}>
        <a href="#" target="_blank" rel="noreferrer">
          CRM Project
        </a>
        Next.js Project &copy;
      </footer>
    </>
  );
}

export default Layout;
