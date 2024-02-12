"use client"
import { CardInfo } from "@/components/card-info"
import { CardPreview } from "@/components/card-preview"
import { getHistorial } from "@/components/get-info"
import { Header } from "@/components/header"
import { IconLoading } from "@/components/icons"
import { SideBar } from "@/components/sidebar"
import { useEffect, useState } from "react"

export default function Home() {
  const [information, setInformation] = useState([])
  const [loading, setLoading] = useState(false)
  const [indexInformation, setIndexInformation] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      const data = await getHistorial()
      setInformation(data)
      setLoading(true)
    }
    fetchData()
  }, [])

  const handleInfoChange = (id) => {
    setIndexInformation(id)
  }

  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="z-20 flex">
          {loading ? (
            <>
              <div className="lg:w-[68%] w-full flex flex-col gap-5 -mt-9 mb-14 animate-fade animate-duration-300">
                {information.map((item, index) => (
                  <CardPreview
                    InfoChange={handleInfoChange}
                    information={item}
                    id={index}
                    key={index}
                  />
                ))}
              </div>
              <div className="w-[32%] hidden lg:block -mt-40">
                <CardInfo information={information[indexInformation]} />
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
