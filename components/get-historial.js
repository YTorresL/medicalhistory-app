export async function getHistorial() {
  const res = await fetch(`https://206.62.175.124:42380/sh-oft/getCLI`)

  if (!res.ok) {
    throw new Error("Something went wrong")
  }
  const { data } = await res.json()

  return data.map(
    ({ Rif, Nombre, Codigo, Zona, Telef, Direcc, historias, Email }) => {
      return {
        rif: Rif,
        nombre: Nombre,
        codigo: Codigo,
        zona: Zona,
        telef: Telef,
        direcc: Direcc,
        historias,
        email: Email,
      }
    },
  )
}
