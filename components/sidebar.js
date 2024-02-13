import { Icon208EyePlus } from "./icons"

export function SideBar() {
  return (
    <aside className="w-[78px] min-h-screen bg-white grid shadow-lg z-0">
      <div className="flex items-center justify-center w-full h-16">
        <div className="h-auto w-9">
          <Icon208EyePlus className="w-full h-full text-[#1FBBC2]" />
        </div>
      </div>
    </aside>
  )
}
