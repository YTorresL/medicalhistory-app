// let baseurl = "https://testsh.alphasoft.com.ve"
let baseurl = ""

export default (url, options = {}) => {
  return fetch(baseurl + url, options)
}
