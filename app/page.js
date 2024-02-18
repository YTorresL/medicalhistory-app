"use client"
import { CustomerCardInfo } from "@/components/card/customer-card-info"
import { CustomerCardPreview } from "@/components/card/customer-card-preview"
import { getHistory } from "@/components/getdata/get-info"
import { Header, SIZE_PAGINATE } from "@/components/header"
import { IconLoading } from "@/components/icons"
import { SideBar } from "@/components/sidebar"
import { useEffect, useState } from "react"
import { ZonaProvider } from "@/context/zona"
import { Pagination } from "@/utils/pagination"

const paginate = (items, currentPageNumber, pageSize) => {
  const startIndex = (currentPageNumber - 1) * pageSize
  return items.slice(startIndex, startIndex + pageSize)
}

export default function Home() {
  const [currentPageNumber, setCurrentPageNumber] = useState(1)
  const [customer, setCustomer] = useState([])
  const [customerSearchOrg, setCustomerOrg] = useState([])

  const [isloading, setIsLoading] = useState(false)
  const [indexCustomer, setIndexCustomer] = useState(0)
  const [pageSize, setPageSize] = useState(SIZE_PAGINATE[0])

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistory()
      setCustomer(data)
      setCustomerOrg(data)
      setIsLoading(true)
    }
    fetchData()
  }, [])

  const searchCustomer = (value) => {
    if (value) {
      const result = customerSearchOrg.filter((item) => {
        return (
          item.Codigo.toLowerCase().includes(value.toLowerCase()) ||
          item.Nombre.toLowerCase().includes(value.toLowerCase()) ||
          item.Direcc.toLowerCase().includes(value.toLowerCase())
        )
      })
      setCustomer(result)
    } else {
      setCustomer(customerSearchOrg)
    }
  }

  const onPageChange = (page) => {
    setCurrentPageNumber(page)
  }
  const handleInfoChange = (id) => {
    setIndexCustomer(id)
  }

  const handlePageSizeChange = (size) => {
    setCurrentPageNumber(1)
    setPageSize(size)
  }

  const paginatedCustomer = paginate(customer, currentPageNumber, pageSize)

  const selectedCustomer = customer.findIndex(
    (item) => item.Codigo === indexCustomer,
  )

  return (
    <div className="flex">
      <ZonaProvider>
        <SideBar />
        <div className="flex flex-col w-full">
          <Header
            handlePageSizeChange={handlePageSizeChange}
            searchCustomer={searchCustomer}
          />
          <main className="z-20 flex">
            {isloading ? (
              <>
                <div className="lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300">
                  {paginatedCustomer.map((item, index) => (
                    <CustomerCardPreview
                      InfoChange={handleInfoChange}
                      customer={item}
                      id={index}
                      key={index}
                    />
                  ))}
                  <div className="mx-auto my-3">
                    <Pagination
                      items={customer.length} // 100
                      currentPage={currentPageNumber} // 1
                      pageSize={pageSize} // 10
                      onPageChange={onPageChange}
                    />
                  </div>
                </div>
                <div className="w-[32%] hidden lg:block -mt-40">
                  <CustomerCardInfo
                    customer={
                      customer[selectedCustomer === -1 ? 0 : selectedCustomer]
                    }
                  />
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
      </ZonaProvider>
    </div>
  )
}
