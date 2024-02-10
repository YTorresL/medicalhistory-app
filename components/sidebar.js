import { Menu } from "./icons"

export function SideBar() {
  return (
    <aside className="w-[78px] min-h-screen bg-white grid shadow-lg z-50">
      <div className="flex justify-center w-full h-16">
        <button className="w-8 h-full">
          <Menu fill="#1FBBC2" />
        </button>
      </div>
    </aside>
  )
}
