const axios = require('axios').default;


 export const gaaet = async (url) => {
     const t =  await axios.get(url)
     console.log(t)
     return t
 }
