import { CartComponent } from "./cart.component";

export interface CartContainerProps {
  className?: string;
}

export const CartContainer = ({ className }: CartContainerProps) => {
  const handleDelete = (id: string) => {
    console.log(`deleting ${id}`);
  };

  return <CartComponent className={className} onDelete={handleDelete} />;
};
