export async function getHistorial() {
  const res = await fetch(`https://testsh.alphasoft.com.ve/sh-oft/getCLI`)

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
