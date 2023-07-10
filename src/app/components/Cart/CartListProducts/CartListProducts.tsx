import "./cartListProducts.scss";
import { useCartContext } from "@/app/providers/CartContext";
import { CartCardProduct } from "../CartCardProduct/CartCardProduct";

export const CartListProduct = () => {
  const { productsCart } = useCartContext();
  return (
    <div className="cart__ul">
      {productsCart.map((product) => (
        <CartCardProduct key={product.id} product={product} />
      ))}
    </div>
  );
};
