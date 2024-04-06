import { CartComponent } from "./cart.component";

export interface CartContainerProps {
  className?: string;
}

export const CartContainer = ({ className }: CartContainerProps) => {
  return <CartComponent className={className} />;
};
