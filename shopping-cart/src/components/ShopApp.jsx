import ProductList from './ProductList';
import Cart from './Cart';

function ShopApp() {
  return (
    <div className='shop-container'>
      <div className='shop-title'>Tech Shop</div>
      <div className='shop-layout'>
        <ProductList />
        <Cart />
      </div>
    </div>
  );
}
export default ShopApp;
