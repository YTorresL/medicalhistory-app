// let baseurl = "https://testsh.alphasoft.com.ve"
const baseurl = process.env.API_URL

export default (url, options = {}) => {
  return fetch(baseurl + url, options)
}
