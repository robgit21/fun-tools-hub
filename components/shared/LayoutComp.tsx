import Head from "next/head";
import NavigationComp from "./NavigationComp";
import FooterComp from "./FooterComp";
import styles from "./layoutComp.module.css";

const LayoutComp: React.FC<any> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Test - Titel</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <div className={styles.content}>
          <NavigationComp />
          {children}
        </div>
        <footer className={styles.footer}>
          <FooterComp />
        </footer>
      </div>
    </div>
  );
};

export default LayoutComp;
