import useStore from '../store';
import ProductCard from './ProductCard';

function ProductList() {
  const products = useStore((state) => state.products);
  return (
    <div className='product-grid'>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
export default ProductList;
