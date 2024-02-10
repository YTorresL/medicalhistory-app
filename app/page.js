import { CardInfo } from "@/components/card-info"
import { CardPreview } from "@/components/card-preview"
import { Header } from "@/components/header"
import { SideBar } from "@/components/sidebar"

export default function Home() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex flex-col w-full">
        <Header />
        <main className="z-20 flex">
          <div className="lg:w-[68%] w-full flex flex-col gap-5 -mt-9">
            <CardPreview />
          </div>
          <div className="w-[32%] hidden lg:block -mt-40">
            <CardInfo />
          </div>
        </main>
      </div>
    </div>
  )
}
