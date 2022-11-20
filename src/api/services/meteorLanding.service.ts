import {get} from '../axios'
import {NASA_URL} from "../../utils/CONSTS";

export const getAllMeteors = async () => {
    const res = await get(NASA_URL, {} )
    console.log(res.data)
    return res.data
}

export const getAllMeteorsInYear = async (year: string) => {
    const res = await get(NASA_URL, {} )

    console.log(res.data)
    return res.data
}



