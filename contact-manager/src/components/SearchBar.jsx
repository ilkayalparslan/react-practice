function SearchBar() {
  return (
    <div className='search-bar'>
      <input
        type='text'
        className='search-input'
        placeholder='Search contacts...'
      />
      <button className='add-toggle-btn'>+ Add Contact</button>
    </div>
  );
}
export default SearchBar;
