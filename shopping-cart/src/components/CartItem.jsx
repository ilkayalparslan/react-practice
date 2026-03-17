import useStore from '../store';

function CartItem({ item }) {
  const products = useStore((state) => state.products);
  const updateQuantity = useStore((state) => state.updateQuantity);
  const removeFromCart = useStore((state) => state.removeFromCart);

  const product = products.find((p) => p.id === item.productId);

  return (
    <div className='cart-item'>
      <span className='cart-item-image'>{product.image}</span>
      <div className='cart-item-info'>
        <h4 className='cart-item-name'>{product.name}</h4>
        <p className='cart-item-price'>
          ${(product.price * item.quantity).toFixed(2)}
        </p>
      </div>
      <div className='cart-item-controls'>
        <button
          className='qty-btn'
          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
        >
          -
        </button>
        <span className='qty-display'>{item.quantity}</span>
        <button
          className='qty-btn'
          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
        >
          +
        </button>
      </div>
      <button
        className='remove-btn'
        onClick={() => removeFromCart(item.productId)}
      >
        x
      </button>
    </div>
  );
}
export default CartItem;
