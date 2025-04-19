import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface PaginationProps {
  totalPages: number
  currentPage: number
}

export default function Pagination({ totalPages, currentPage }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className="flex justify-center mt-12">
      <div className="flex items-center space-x-1">
        <Link
          href={currentPage > 1 ? `/properties?page=${currentPage - 1}` : "#"}
          className={`p-2 rounded-md ${currentPage > 1 ? "text-gray-700 hover:bg-gray-200" : "text-gray-400 cursor-not-allowed"}`}
          aria-disabled={currentPage <= 1}
          tabIndex={currentPage <= 1 ? -1 : undefined}
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>

        {pages.map((page) => (
          <Link
            key={page}
            href={`/properties?page=${page}`}
            className={`px-4 py-2 rounded-md ${
              currentPage === page ? "bg-red-600 text-white" : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            {page}
          </Link>
        ))}

        <Link
          href={currentPage < totalPages ? `/properties?page=${currentPage + 1}` : "#"}
          className={`p-2 rounded-md ${currentPage < totalPages ? "text-gray-700 hover:bg-gray-200" : "text-gray-400 cursor-not-allowed"}`}
          aria-disabled={currentPage >= totalPages}
          tabIndex={currentPage >= totalPages ? -1 : undefined}
        >
          <ChevronRight className="h-5 w-5" />
        </Link>
      </div>
    </div>
  )
}
