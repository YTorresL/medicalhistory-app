export const customerHistorySubmissionForm = async (data, clienteId) => {
  data.codigoCliente = clienteId
  const response = await fetch(
    "https://testsh.alphasoft.com.ve/sh-oft/addHIST",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    },
  )
  return response.json()
}
