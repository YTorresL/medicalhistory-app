export function Pagination({ items, pageSize, currentPage, onPageChange }) {
  const pagesCount = Math.ceil(items / pageSize)
  if (pagesCount === 1) return null
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1)
  return (
    <nav>
      <ul class="inline-flex -space-x-px text-base">
        <li>
          <button
            disabled={currentPage === 1}
            onClick={() => onPageChange(currentPage - 1)}
            className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg disabled:bg-gray-200 disabled:cursor-default border-e-0 hover:bg-gray-100 hover:text-gray-700"
          >
            {"<"}
          </button>
        </li>
        {pages.map((page) => (
          <li key={page}>
            <a
              href="#"
              onClick={() => onPageChange(page)}
              className={`flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 ${
                currentPage === page
                  ? "bg-[#d3f3f5] text-gray-700"
                  : "hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              {page}
            </a>
          </li>
        ))}
        <li>
          <button
            disabled={currentPage === pagesCount}
            onClick={() => onPageChange(currentPage + 1)}
            className="flex items-center justify-center h-8 px-3 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg disabled:bg-gray-200 disabled:cursor-default hover:bg-gray-100 hover:text-gray-700"
          >
            {">"}
          </button>
        </li>
      </ul>
    </nav>
  )
}
