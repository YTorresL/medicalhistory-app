import Link from "next/link"
import { IconMathPlus } from "./icons"

export function CardInfo(params) {
  return (
    <div className="relative flex flex-col w-full gap-6 p-10 bg-white rounded-tl-lg shadow-lg">
      <Link className="flex justify-end w-full -mt-3" href={""}>
        <span className="text-[#1FBBC2] transition ease-out duration-150 hover:text-[#1fafc2] font-bold -mr-8">
          Descargar PDF
        </span>
      </Link>
      <img src="./profile.png" className="w-56 h-auto mx-auto" />
      <div className="grid items-center grid-cols-2 gap-5">
        <div className="flex flex-col gap-1">
          <strong className="text-neutral-800">Mariano Garcia</strong>
          <span className="text-neutral-500">0412 4563355</span>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-neutral-800">Mariano Garcia</strong>
          <span className="text-neutral-500">0412 4563355</span>
        </div>
        <div className="flex flex-col gap-1">
          <strong className="text-neutral-800">Mariano Garcia</strong>
          <span className="text-neutral-500">0412 4563355</span>
        </div>
      </div>
      <div className="flex flex-col">
        <strong className="text-neutral-800">Historial</strong>
        <div className="flex flex-col items-center w-full my-6">
          <span className="text-neutral-500">No tiene historial</span>
        </div>
      </div>
      <button className="absolute bottom-6 right-6 rounded-full p-2 transition ease-out duration-150 bg-[#1FBBC2] hover:bg-[#1fafc2]">
        <IconMathPlus className="w-6 h-6 text-white" />
      </button>
    </div>
  )
}
