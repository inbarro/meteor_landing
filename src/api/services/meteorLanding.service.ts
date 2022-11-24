import {get} from '../axios'
import {NASA_URL, YEAR_OFFSET} from "../../utils/CONSTS";
import {meteorData} from "../../interfaces";

export const getAllMeteors = async () => {
    const res = (await get(NASA_URL, {})).data
    const data = res.map((meteor: meteorData) => {
        const formattedYear = meteor.year?.split('-')[0]
        return {...meteor, year:formattedYear}
    })
    return data.sort((a: any, b:any) => a.year < b.year)
}

export const getAllMeteorsInYear = async (year: string) => {
    const res = await get(NASA_URL, {year: year+YEAR_OFFSET} )
    return res.data
}



