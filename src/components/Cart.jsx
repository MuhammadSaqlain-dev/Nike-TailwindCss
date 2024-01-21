import CartItem from "./CartItem";

const Cart = ({ items, itemToRemove }) => {
  return (
    <div>
      <div className="text-4xl font-bold mb-5 dark:text-white">Cart</div>
      <ul className="space-y-5">
        {items.map((shoe) => (
          <li key={shoe.product.id}>
            <CartItem shoe={shoe} removeItem={itemToRemove} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
