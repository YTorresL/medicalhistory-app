import Image from "next/image"
import { IconDownOpenMini, IconSearch } from "./icons"

export function Header(params) {
  return (
    <header className="bg-[#1FBBC2] h-60 z-0 pl-[6%] lg:pl-[4%] pr-[2%] text-white">
      <div className="flex items-center justify-between w-full h-20">
        <div className="flex gap-3">
          <h1 className="text-lg font-bold ">Historia medica</h1>
          <div className="w-2 h-2 mt-3 bg-white rounded-full"></div>
        </div>
        <div className="flex items-center gap-3">
          <span>Adrian Lopez</span>
          <div className="overflow-hidden border-2 border-white rounded-full w-11 h-11">
            <Image
              src={"/linkedin-profile-picture.jpg"}
              className="object-cover object-center w-full h-full"
              width={100}
              height={100}
            />
          </div>
          <button>
            <IconDownOpenMini className="w-8 h-8" />
          </button>
        </div>
      </div>
      <div className="grid items-center lg:w-[64%] w-10/12 h-40">
        <div className="flex flex-col gap-2 lg:items-center lg:justify-between lg:flex-row">
          <form className="lg:w-3/6 ">
            <label for="search" class="text-white sr-only">
              Search
            </label>
            <div class="relative">
              <input
                type="search"
                id="search"
                class="w-full py-3 px-5 bg-white/20 rounded-full outline-none white-input"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                class="text-[#1FBBC2] absolute right-1 bottom-[3px] p-2 transition ease-out duration-150 bg-white hover:bg-[#eeeeee] rounded-full"
              >
                <IconSearch className="w-5 h-5" />
              </button>
            </div>
          </form>
          <button className="flex items-center gap-1">
            <span>Mostrar menos de 5</span>
            <IconDownOpenMini className="w-7 h-7" />
          </button>
        </div>
      </div>
    </header>
  )
}
