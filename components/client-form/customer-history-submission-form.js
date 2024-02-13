export const customerHistorySubmissionForm = async (data, customerId) => {
  data.codigoCliente = customerId
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
