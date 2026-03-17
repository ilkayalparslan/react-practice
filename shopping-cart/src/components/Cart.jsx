import useStore from '../store';
import CartItem from './CartItem';

function Cart() {
  const cart = useStore((state) => state.cart);
  const getCartTotal = useStore((state) => state.getCartTotal);
  const getCartCount = useStore((state) => state.getCartCount);
  const clearCart = useStore((state) => state.clearCart);

  if (cart.length === 0) {
    return (
      <div className='cart-container'>
        <h2 className='cart-title'>Your Cart</h2>
        <p className='cart-empty'>Your Cart is Empty</p>
      </div>
    );
  }

  return (
    <div className='cart-container'>
      <div className='cart-header'>
        <h2 className='cart-title'>Your Cart ({getCartCount()})</h2>
        <button className='clear-btn' onClick={clearCart}>
          Clear All
        </button>
      </div>
      {cart.map((item) => (
        <CartItem key={item.productId} item={item} />
      ))}
      <div className='cart-footer'>
        <span className='cart-total-label'>Total : </span>
        <span className='cart-total-price'>${getCartTotal()}</span>
      </div>
    </div>
  );
}
export default Cart;
