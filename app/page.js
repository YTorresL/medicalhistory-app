"use client"
import { CardInfo } from "@/components/card/card-info"
import { CardPreview } from "@/components/card/card-preview"
import { getHistory } from "@/components/info/get-info"
import { Header, SIZE_PAGINATE } from "@/components/header"
import { IconLoading } from "@/components/icons"
import { SideBar } from "@/components/sidebar"
import { useEffect, useState } from "react"
import { Pagination } from "@/components/pagination"

const paginate = (items, pageNumber, pageSize) => {
  const startIndex = (pageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1)
  const [customer, setCustomer] = useState([])
  const [loading, setLoading] = useState(false)
  const [indexCustomer, setIndexCustomer] = useState(0)
  const [pageSize, setPageSize] = useState(SIZE_PAGINATE[0])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistory()
      setCustomer(data)
      setLoading(true)
    }
    fetchData()
  }, [])

  const onPageChange = (page) => {
    setCurrentPage(page)
  }
  const handleInfoChange = (id) => {
    setIndexCustomer(id)
  }

  const handlePageSizeChange = (size) => {
    setPageSize(size)
  }

  const paginatedCustomer = paginate(customer, currentPage, pageSize)

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header handlePageSizeChange={handlePageSizeChange} />
        <main className="z-20 flex">
          {loading ? (
            <>
              <div className="lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300">
                {paginatedCustomer.map((item, index) => (
                  <CardPreview
                    InfoChange={handleInfoChange}
                    customer={item}
                    id={index}
                    key={index}
                  />
                ))}
                <div className="mx-auto my-3">
                  <Pagination
                    items={customer.length} // 100
                    currentPage={currentPage} // 1
                    pageSize={pageSize} // 10
                    onPageChange={onPageChange}
                  />
                </div>
              </div>
              <div className="w-[32%] hidden lg:block -mt-40">
                <CardInfo customer={customer[indexCustomer]} />
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center w-full h-96">
              <IconLoading className="w-8 h-8 animate-spin text-gray-200 fill-[#1FBBC2]" />
              <span class="sr-only">Loading...</span>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
