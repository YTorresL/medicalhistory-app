import { CardInfo } from "./card-info"
import { IconArrowRight, IconMapPin, IconTelephoneFill } from "./icons"

export function CardPreview(params) {
  return (
    <>
      <div>
        <div className="w-[88%] mx-auto h-full p-3 flex bg-white rounded-lg shadow-xl shadow-black/5">
          <div className="flex items-center w-[38%] gap-5 py-2 pl-5">
            <img src="./profile.png" className="w-14 h-14" />
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Mariano Garcia</strong>
              <div className="flex items-center gap-3 text-neutral-400">
                <IconTelephoneFill className="w-4 h-4" fill="#1FBBC2" />
                0412 4563355
              </div>
            </div>
          </div>
          <div className="border-l border-[#EDEDED] py-5 flex justify-between w-[62%] items-center  pl-10 pr-5">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Dirección</strong>
              <div className="flex items-center gap-3 text-neutral-400">
                <IconMapPin className="w-4 h-4" fill="#1FBBC2" />
                Las Valerianas 234# AC
              </div>
            </div>

            <div>
              <button className="flex items-center rounded-full p-2 transition ease-out duration-150 hover:bg-[#eeeeee] bg-[#F9FAFE]">
                <IconArrowRight className="w-6 h-6" fill="#1FBBC2" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-[88%] mx-auto lg:hidden">
        <CardInfo />
      </div>
    </>
  )
}
