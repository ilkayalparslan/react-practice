import useStore from '../store';

function ProductCard({ product }) {
  const addToCart = useStore((state) => state.addToCart);
  const cartItem = useStore((state) =>
    state.cart.find((item) => item.productId === product.id),
  );
  return (
    <div className='product-card'>
      <span className='product-image'>{product.image}</span>
      <h3 className='product-name'>{product.name}</h3>
      <p className='product-price'>${product.price}</p>
      <button className='add-btn' onClick={() => addToCart(product.id)}>
        {cartItem ? `In Cart (${cartItem.quantity})` : 'Add to Cart'}
      </button>
    </div>
  );
}
export default ProductCard;
