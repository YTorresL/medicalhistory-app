import { IconClose } from "./icons"

export function CreateInfo({
  getCreateViewStyle,
  handleToggle,
  title,
  children,
}) {
  return (
    <div
      className={`${getCreateViewStyle()} bg-black/40 flex items-center justify-center z-[2000] inset-0`}
    >
      <div className="w-5/6 p-3 bg-white rounded-lg h-5/6">
        <div className="flex justify-between border-b border-[#EDEDED] pb-3">
          <div className="flex items-center justify-center w-full">
            <span className="text-[#1FBBC2]">{title}</span>
          </div>
          <div>
            <button
              onClick={handleToggle}
              className="flex p-2 items-center justify-center h-10 w-10  rounded-full bg-[#eeeeee] hover:bg-white transition ease-out duration-150"
            >
              <IconClose
                className="w-full text- [#1FBBC2] h-full"
                stroke="#1FBBC2"
                fill="#1FBBC2"
              />
            </button>
          </div>
        </div>
        {children}
      </div>
    </div>
  )
}
