"use client"
import Link from "next/link"
import { IconMathPlus } from "../icons"
import { useState } from "react"
import { useOpen } from "@/hooks/useOpen"
import { FormHandler } from "../popup/form-handler"
import { CustomerHistoryForm } from "../forms/customer-history-form"

export function CustomerCardInfo({ customer }) {
  const [isCreateOpen] = useState(false) // Estado para controlar la apertura/cierre del mostrar un numero limitado de items

  const { toggleView, getPopUpStyle } = useOpen(isCreateOpen) // Usa el hook useOpen para controlar la visibilidad del límite // Usa el hook useOpen para controlar la visibilidad de la configuración

  const handleCreateToggle = () => {
    toggleView()
  }

  return (
    <>
      <div className="relative bg-white rounded-l-lg shadow-lg">
        <div
          className="flex flex-col w-full gap-6 p-10 pb-20 animate-fade animate-duration-300"
          key={customer.Codigo}
        >
          <Link className="flex justify-end w-full -mt-3" href={""}>
            <span className="text-[#1FBBC2] transition ease-out duration-150 hover:text-[#1fafc2] font-bold -mr-4">
              Descargar PDF
            </span>
          </Link>
          <img src="./profile.png" className="w-56 h-auto mx-auto" />
          <div className="grid items-center grid-cols-2 gap-5">
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Nombre</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Nombre || "---"}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">RIF</strong>
              <span className="text-neutral-400">{customer.Rif || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Especialista</strong>
              <span className="text-neutral-400">{customer.Zona || "---"}</span>
            </div>
            <div className="flex flex-col gap-1">
              <strong className="text-neutral-800">Telefono</strong>
              <span className="text-neutral-400">
                {customer.Telef || "---"}
              </span>
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <strong className="text-neutral-800">Correo</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Email || "---"}
              </span>
            </div>
            <div className="flex flex-col col-span-2 gap-1">
              <strong className="text-neutral-800">Dirección</strong>
              <span className="leading-5 text-neutral-400">
                {customer.Direcc || "---"}
              </span>
            </div>
          </div>
          <div className="flex flex-col">
            <strong className="text-[#1FBBC2]">Historial</strong>
            <div className="flex flex-col items-center w-full">
              {customer.historias.length > 0 ? (
                <div className="w-full">
                  {customer.historias.map((item, index) => (
                    <div
                      key={index}
                      className="w-full border-b-2 border-[#1FBBC2] py-3 my-2"
                    >
                      <div className="flex flex-col gap-3">
                        <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">Fecha</strong>
                            <span className="text-neutral-400">
                              {item.fecha || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">Edad</strong>
                            <span className="text-neutral-400">
                              {item.edad || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">Sexo</strong>
                            <span className="text-neutral-400">
                              {item.sexo || "---"}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
                          <div className="flex flex-col gap-3">
                            <strong className="mb-2 text-neutral-800">
                              Ojo Izquierdo
                            </strong>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Esfera
                              </strong>
                              <span className="text-neutral-400">
                                {item.OI_Esfera || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Cilindro
                              </strong>
                              <span className="text-neutral-400">
                                {item.OI_Cilindro || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">Eje</strong>
                              <span className="text-neutral-400">
                                {item.OI_Eje || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Distancia
                              </strong>
                              <span className="text-neutral-400">
                                {item.OI_Distancia || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Adición
                              </strong>
                              <span className="text-neutral-400">
                                {item.OI_Adicion || "---"}
                              </span>
                            </div>
                          </div>
                          <div className="flex flex-col gap-3">
                            <strong className="mb-2 text-neutral-800">
                              Ojo Derecho
                            </strong>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Esfera
                              </strong>
                              <span className="text-neutral-400">
                                {item.OD_Esfera || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Cilindro
                              </strong>
                              <span className="text-neutral-400">
                                {item.OD_Cilindro || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">Eje</strong>
                              <span className="text-neutral-400">
                                {item.OD_Eje || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Distancia
                              </strong>
                              <span className="text-neutral-400">
                                {item.OD_Distancia || "---"}
                              </span>
                            </div>
                            <div className="flex flex-col gap-1">
                              <strong className="text-neutral-800">
                                Adición
                              </strong>
                              <span className="text-neutral-400">
                                {item.OD_Adicion || "---"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 gap-x-5 border-b pb-3 mb-3 border-dashed border-[#EDEDED]">
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">DNP</strong>
                            <span className="text-neutral-400">
                              {item.DNP || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">Altura</strong>
                            <span className="text-neutral-400">
                              {item.Altura || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">DP</strong>
                            <span className="text-neutral-400">
                              {item.DP || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">TM</strong>
                            <span className="text-neutral-400">
                              {item.Tm || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">PT</strong>
                            <span className="text-neutral-400">
                              {item.Pt || "---"}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3 gap-x-5">
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">
                              Cristales
                            </strong>
                            <span className="text-neutral-400">
                              {item.Cristales || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">
                              Montura
                            </strong>
                            <span className="text-neutral-400">
                              {item.Montura || "---"}
                            </span>
                          </div>
                          <div className="flex flex-col gap-1">
                            <strong className="text-neutral-800">Color</strong>
                            <span className="text-neutral-400">
                              {item.Color || "---"}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <span className="my-6 text-neutral-400">
                  No tiene historial
                </span>
              )}
            </div>
          </div>
          <button
            onClick={handleCreateToggle}
            className="absolute bottom-6 right-6 rounded-full p-2 transition ease-out duration-150 bg-[#1FBBC2] hover:bg-[#1fafc2]"
          >
            <IconMathPlus className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
      <FormHandler
        getCreateViewStyle={getPopUpStyle}
        handleToggle={handleCreateToggle}
        title="Agregar al historial"
      >
        <CustomerHistoryForm
          customerId={customer.Codigo}
          handleCreateToggle={handleCreateToggle}
        />
      </FormHandler>
    </>
  )
}
