import CartItem from "./CartItem";

const Cart = ({ FAKE_SHOES }) => {
  return (
    <div>
      <div className="text-4xl font-bold mb-5 dark:text-white">Cart</div>
      <ul className="space-y-5">
        {FAKE_SHOES.map((shoe) => (
          <li key={shoe.product.id}>
            <CartItem shoe={shoe} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
