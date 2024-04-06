import * as React from "react";
import { CartContainer } from "pods/cart";
import styles from "./app.layout.module.scss";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container__main}>{children}</div>
      <CartContainer className={styles.container__sidebar} />
    </div>
  );
};
