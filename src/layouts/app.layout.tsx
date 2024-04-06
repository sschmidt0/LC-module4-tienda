import * as React from "react";
import { CartContainer } from "pods/cart";
import styles from "./app.layout.module.scss";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>{children}</div>
      <CartContainer />
    </div>
  );
};
