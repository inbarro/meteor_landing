import {get} from '../axios'
import {NASA_URL} from "../../utils/CONSTS";
import {formatRawMeteorData} from '../../helpers/format.helper'
import {meteorData} from "../../interfaces";

export const getAllMeteors = async () => {
    try{
        const res = await get(NASA_URL, {})
        if (res)
            return formatRawMeteorData(res.data)
        else return [] as Array<meteorData>
    } catch (e) {

    }
}