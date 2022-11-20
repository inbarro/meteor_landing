const axios = require('axios').default;

 export const get = async (url: any, params: any) => {
     const res =  await axios.get(url, { params })
     return res
 }
