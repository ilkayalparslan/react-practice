function ProductCard({ product }) {
  return (
    <div className='product-card'>
      <div className='product-header'>
        <h3 className='product-name'>{product.name}</h3>
        <span className='product-category'>{product.category}</span>
      </div>
      <div className='product-footer'>
        <span className='product-price'>${product.price}</span>
        <span className='product-rating'>⭐ {product.rating}</span>
      </div>
    </div>
  )
}
export default ProductCard
