// AuthLayout.js
import styles from "../styles/auth.module.css";

// eslint-disable-next-line react/prop-types
function AuthLayout({ children }) {
  return (
    <div className={styles.container}>
      {/* Add common header, navigation, or any elements here */}
      <header></header>

      {/* Render the main content */}
      <main>{children}</main>

      {/* Add common footer or any elements here */}
      <footer></footer>
    </div>
  );
}

export default AuthLayout;
