import fetch from "@/api/fetch"

export const customerSubmissionForm = async (data) => {
  fetch("/sh-oft/addCLI", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
}
