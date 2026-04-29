import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <p className={styles.text}>Loading data...</p>
    </div>
  );
};

export default Loader;
