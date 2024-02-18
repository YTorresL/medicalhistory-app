import { IconDownOpenMini, IconFileText } from "../icons"
import { useState } from "react"

export function HistoryAccordion({ history }) {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }
  return (
    <div>
      <h2>
        <button
          type="button"
          onClick={handleToggle}
          class="flex items-center justify-between w-full p-1 font-medium rtl:text-right text-neutral-400 rounded-lg gap-3"
        >
          <span class="flex items-center gap-4">
            <IconFileText className="w-5 h-5 text-black" />
            {history.fecha || "---"}
          </span>
          <IconDownOpenMini
            className={`text-black w-7 h-7 transition-all duration-200 ease-out ${isOpen && "rotate-180"}`}
          />
        </button>
      </h2>
      <div
        className={`${isOpen ? "h-[735px]" : "h-0"} transition-all duration-700 ease-out overflow-hidden w-full`}
      >
        <div className="flex flex-col gap-3 py-3 my-2">
          <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Edad</strong>
              <span className="text-neutral-400">{history.edad || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Sexo</strong>
              <span className="text-neutral-400">{history.sexo || "---"}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
            <div className="flex flex-col gap-3">
              <strong className="mb-2 text-neutral-800">Ojo Izquierdo</strong>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Esfera</strong>
                <span className="text-neutral-400">
                  {history.OI_Esfera || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Cilindro</strong>
                <span className="text-neutral-400">
                  {history.OI_Cilindro || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Eje</strong>
                <span className="text-neutral-400">
                  {history.OI_Eje || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Distancia</strong>
                <span className="text-neutral-400">
                  {history.OI_Distancia || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Adición</strong>
                <span className="text-neutral-400">
                  {history.OI_Adicion || "---"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <strong className="mb-2 text-neutral-800">Ojo Derecho</strong>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Esfera</strong>
                <span className="text-neutral-400">
                  {history.OD_Esfera || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Cilindro</strong>
                <span className="text-neutral-400">
                  {history.OD_Cilindro || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Eje</strong>
                <span className="text-neutral-400">
                  {history.OD_Eje || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Distancia</strong>
                <span className="text-neutral-400">
                  {history.OD_Distancia || "---"}
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <strong className="text-neutral-800">Adición</strong>
                <span className="text-neutral-400">
                  {history.OD_Adicion || "---"}
                </span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">DNP</strong>
              <span className="text-neutral-400">{history.DNP || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Altura</strong>
              <span className="text-neutral-400">
                {history.Altura || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">DP</strong>
              <span className="text-neutral-400">{history.DP || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">TM</strong>
              <span className="text-neutral-400">{history.Tm || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">PT</strong>
              <span className="text-neutral-400">{history.Pt || "---"}</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 gap-x-5">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Cristales</strong>
              <span className="text-neutral-400">
                {history.Cristales || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Montura</strong>
              <span className="text-neutral-400">
                {history.Montura || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Color</strong>
              <span className="text-neutral-400">{history.Color || "---"}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
