import { getZonas } from "@/components/getdata/get-info"
import { useEffect, useState } from "react"

export default function useZona() {
  const [Loader, setLoader] = useState(false)
  const [Zonas, setZonas] = useState([])
  useEffect(() => {
    async function fetchData() {
      const data = await getZonas()
      setZonas(data)
      setLoader(true)
    }
    if (!Loader) {
      fetchData()
    }
  }, [Loader])
  const getZona = (Name) => {
    return Zonas.find((zona) => zona.zona === Name)
  }
  return {
    Zonas,
    getZona,
    Loader,
  }
}
