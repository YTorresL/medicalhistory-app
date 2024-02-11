"use client"
import Image from "next/image"
import { IconCreateOutline, IconDownOpenMini, IconSearch } from "./icons"
import Link from "next/link"
import { useState } from "react"
import { useOpen } from "@/hooks/useOpen"
import { CreateInfo } from "./create-info"
import { FormClient } from "./form-client"

export function Header() {
  const [isConfigOpen] = useState(false)
  const [isLimitOpen] = useState(false)
  const [isCreateOpen] = useState(false)
  const { toggleView: toggleConfigView, getViewStyle: getConfigViewStyle } =
    useOpen(isConfigOpen)
  const { toggleView: toggleLimitView, getViewStyle: getLimitViewStyle } =
    useOpen(isLimitOpen)
  const { toggleView: toggleCreateView, getCreateStyle: getCreateViewStyle } =
    useOpen(isCreateOpen)

  const handleConfigToggle = () => toggleConfigView()
  const handleLimitToggle = () => toggleLimitView()
  const handleCreateToggle = () => toggleCreateView()

  return (
    <header className="bg-[#1FBBC2] h-60 pl-[6%] lg:pl-[4%] pr-[2%] text-white">
      <div className="flex items-center justify-between w-full h-20">
        <div className="flex gap-3">
          <h1 className="text-lg font-bold">Historia médica</h1>
          <div className="w-2 h-2 mt-3 bg-white rounded-full"></div>
        </div>
        <div className="flex items-center gap-3">
          <span>Optiluz, C.A</span>
          <div className="overflow-hidden border-2 border-white rounded-full w-11 h-11">
            <Image
              src={"/optiluz.jpg"}
              className="object-cover object-center w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <button onClick={handleConfigToggle}>
            <IconDownOpenMini className="w-8 h-8" />
          </button>
          <div
            className={`${getConfigViewStyle()} transition ease-out duration-150 absolute z-[500] shadow-xl shadow-black/5 bg-white top-[76px] right-5 w-56 grid rounded-lg border-[#EDEDED] border justify-center`}
          >
            <Link
              className="text-[#1FBBC2] p-3 border-b border-[#EDEDED]"
              href={""}
            >
              Configuración
            </Link>
            <Link className="text-[#1FBBC2] p-3" href={""}>
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>
      <div className="grid items-center lg:w-[64%] w-10/12 h-40">
        <div className="flex flex-col gap-2 lg:items-center lg:justify-between lg:flex-row">
          <div className="flex items-center gap-3 lg:w-3/5">
            <form className="w-full">
              <label htmlFor="search" className="text-white sr-only">
                Search
              </label>
              <div className="relative">
                <input
                  type="search"
                  id="search"
                  autoComplete="off"
                  className="w-full px-5 py-3 rounded-full outline-none bg-white/20 white-input"
                  placeholder="Search"
                  required
                />
                <button
                  type="submit"
                  className="text-[#1FBBC2] absolute right-1 bottom-[3px] p-2 transition ease-out duration-150 bg-white hover:bg-[#eeeeee] rounded-full"
                >
                  <IconSearch className="w-5 h-5" />
                </button>
              </div>
            </form>
            <div>
              <button
                onClick={handleCreateToggle}
                className="flex p-2 items-center justify-center h-10 w-10 bg-white rounded-full hover:bg-[#eeeeee] transition ease-out duration-150"
              >
                <IconCreateOutline
                  className="w-full h-full"
                  stroke="#1FBBC2"
                  fill="#1FBBC2"
                />
              </button>
              <CreateInfo
                getCreateViewStyle={getCreateViewStyle}
                handleToggle={handleCreateToggle}
                title="Crear un cliente"
              >
                <FormClient />
              </CreateInfo>
            </div>
          </div>
          <button
            className="flex items-center gap-1"
            onClick={handleLimitToggle}
          >
            <span>Mostrar menos de 5</span>
            <IconDownOpenMini className="w-7 h-7" />
          </button>
          <div
            className={`${getLimitViewStyle()} transition ease-out duration-150 absolute z-[500] shadow-xl shadow-black/5 bg-white top-[180px] right-[33%] w-56 grid rounded-lg border-[#EDEDED] border justify-center`}
          >
            <Link
              className="text-[#1FBBC2] p-3 border-b border-[#EDEDED]"
              href={""}
            >
              Menos de 10
            </Link>
            <Link className="text-[#1FBBC2] p-3" href={""}>
              Menos de 20
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
