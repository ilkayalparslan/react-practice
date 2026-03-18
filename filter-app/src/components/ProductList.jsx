import useStore from '../store'
import ProductCard from './ProductCard'

function ProductList() {
  // 1. İhtiyacımız olan tüm ham verileri ve filtreleme kriterlerini çekiyoruz
  const products = useStore((state) => state.products)
  const searchQuery = useStore((state) => state.searchQuery)
  const selectedCategory = useStore((state) => state.selectedCategory)
  const sortBy = useStore((state) => state.sortBy)

  // 2. Filtreleme fonksiyonunun KENDİSİNİ çekiyoruz (çalıştırmıyoruz!)
  const getFilteredProducts = useStore((state) => state.getFilteredProducts)

  // 3. Hesaplamayı BURADA yapıyoruz
  // Bu sayede sadece yukarıdaki 4 değişken değiştiğinde hesaplama yapılır
  const filteredProducts = getFilteredProducts()

  return (
    <div className='product-section'>
      <p className='product-count'>
        Showing {filteredProducts.length} of {products.length} products
      </p>
      <div className='product-grid'>
        {filteredProducts.length === 0 ? (
          <p className='no-results'>No products found</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        )}
      </div>
    </div>
  )
}

export default ProductList
