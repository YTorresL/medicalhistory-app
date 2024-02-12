export const customerHistorySubmissionForm = async (information, data) => {
  const cliente = information.find(
    (cliente) => cliente.Codigo === information.codigo,
  )
  if (cliente) {
    cliente.historias.push(data)
    const url = "http://206.62.175.124:42380/sh-oft/addHIST"
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(cliente),
    })

    return response.json()
  } else {
    throw new Error("Cliente no encontrado")
  }
}
