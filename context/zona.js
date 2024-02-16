import { createContext } from "react"
import useZonas from "@/hooks/useZonas"
const ZonaContext = createContext(useZonas)

function ZonaProvider({ children }) {
  const Zona = useZonas()
  if (!Zona.Loader)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#1FBBC2]">
          <span class="sr-only">Loading...</span>
        </div>
      </div>
    )
  return <ZonaContext.Provider value={Zona}>{children}</ZonaContext.Provider>
}
export { ZonaContext, ZonaProvider }
