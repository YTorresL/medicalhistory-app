import { useState } from "react"

export const STATE_VIEW = {
  OPEN: 1,
  CLOSE: 0,
}

export function useOpen(initialView) {
  const [open, setOpen] = useState(initialView)

  const toggleView = () => {
    setOpen((prevOpen) =>
      prevOpen === STATE_VIEW.OPEN ? STATE_VIEW.CLOSE : STATE_VIEW.OPEN,
    )
  }

  const getViewStyle = () => {
    return open === STATE_VIEW.OPEN ? "block" : "hidden"
  }

  return {
    toggleView,
    getViewStyle,
  }
}
