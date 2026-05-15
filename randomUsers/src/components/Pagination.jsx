function Pagination({page, totalPages, onPageChange}) {
    return (
        <nav>
            <button
            onClick={() => onPageChange(page-1)}
            disabled={page === 1}
            aria-label="Previous page"
            >
                ← Prev
            </button>

            <div>
                {
                    Array.from({ length: totalPages }, (_, i) => i + 1)
                        .filter(p => 
                            p === 1 ||
                            p === totalPages ||
                            (p >= page - 1 || p <= page + 1)
                        )
                        .reduce((acc, p, idx, arr) => {
                            if (idx > 0 && p - arr[idx - 1] > 1) {
                                acc.push("...")
                            }
                            acc.push(p)
                            return acc;
                        }, [])
                        .map((item, idx) => 
                            item === "..." ? (
                                <span key={`ellipsis-${idx}`}>...</span>
                            ) : (
                                <button 
                                key={item}
                                onClick={() => onPageChange(item)}
                                aria-current={item === page ? 'page' : undefined}
                                >
                                    {item}
                                </button>
                            )
                        )
                }
            </div>

            <button
            aria-label="Next page"
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
            >
                Next →
            </button>
        </nav>
    )
}
export default Pagination;