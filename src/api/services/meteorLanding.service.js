import {gaaet} from '../axios.js'
import {NASA_URL} from "../../utils/CONSTS";

export const getAllMeteors = async () => {
    const res = await gaaet(NASA_URL)
    console.log(res.data)
    return res.data
}
