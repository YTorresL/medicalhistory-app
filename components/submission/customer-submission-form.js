export const customerSubmissionForm = async (data) => {
  fetch("https://testsh.alphasoft.com.ve/sh-oft/addCLI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
}
