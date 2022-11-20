const axios = require('axios').default;


 export const get = async (url, params) => {
     const t =  await axios.get(url, { params })
     console.log(t)
     return t
 }
