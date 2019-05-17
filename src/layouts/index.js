import styles from './index.css';

function BasicLayout(props) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>React 的 30 秒小片段</h1>
      <div className={styles.mian}>{props.children}</div>
    </div>
  );
}

export default BasicLayout;
