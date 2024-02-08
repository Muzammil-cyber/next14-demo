import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>muzammil-cyber</div>
      <div className={styles.text}>
        muzammil creative thoughts agency © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
