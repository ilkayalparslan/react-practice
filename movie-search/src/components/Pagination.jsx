import useStore from '../store';

function Pagination() {
  const page = useStore((state) => state.page);
  const totalPages = useStore((state) => state.totalPages);
  const loading = useStore((state) => state.loading);
  const goToPage = useStore((state) => state.goToPage);

  if (totalPages <= 1) return null;

  // Sayfa numaraları oluştur

  const getPageNumber = () => {
    const pages = [];
    const start = Math.max(1, page - 2);
    const end = Math.min(totalPages, page + 2);

    if (start > 1) pages.push(1);
    if (start > 2) pages.push('...');

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    if (end < totalPages - 1) pages.push('...');
    if (end < totalPages) pages.push(totalPages);

    return pages;
  };
  return (
    <div className='pagination'>
      <button
        className='page-btn'
        disabled={page <= 1 || loading}
        onClick={() => goToPage(page - 1)}
      >
        ← Prev
      </button>

      <div className='page-numbers'>
        {getPageNumber().map((p, i) =>
          p === '...' ? (
            <span key={`dots=${i}`} className='page-dots'>
              ...
            </span>
          ) : (
            <button
              key={p}
              className={`page-num ${p === page ? 'active' : ''}`}
              onClick={() => goToPage(p)}
              disabled={loading}
            >
              {p}
            </button>
          ),
        )}
      </div>

      <button
        className='page-btn'
        disabled={page >= totalPages || loading}
        onClick={() => goToPage(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}
export default Pagination;
