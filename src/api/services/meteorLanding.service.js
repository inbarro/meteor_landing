import {get} from '../axios.js'
import {NASA_URL} from "../../utils/CONSTS";

export const getAllMeteors = async () => {
    const res = await get(NASA_URL)
    console.log(res.data)
    return res.data
}

export const getAllMeteorsInYear = async (year) => {
    const res = await get(NASA_URL, )

    console.log(res.data)
    return res.data
}



