import * as React from "react";
import { CartContainer } from "pods/cart";
import styles from "./app.layout.module.scss";
import { ToggleCartContext } from "core/provider";

export const AppLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  const { isOpen } = React.useContext(ToggleCartContext);

  return (
    <div className={styles.container}>
      <div className={styles.container__main}>{children}</div>
      {isOpen && <CartContainer className={styles.container__sidebar} />}
    </div>
  );
};
