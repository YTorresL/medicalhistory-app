import { Menu } from "./icons"

export function SideBar() {
  return (
    <aside className="w-[78px] min-h-screen bg-white grid shadow-lg z-0">
      <div className="flex items-center justify-center w-full h-16">
        <div className="w-8 h-auto">
          <Menu fill="#1FBBC2" />
        </div>
      </div>
    </aside>
  )
}
