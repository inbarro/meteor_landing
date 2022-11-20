const axios = require('axios').default;


 export const get = async (url: any, params: any) => {
     const t =  await axios.get(url, { params })
     console.log(t)
     return t
 }
