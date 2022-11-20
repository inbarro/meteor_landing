import {get} from '../axios'
import {NASA_URL, YEAR_OFFSET} from "../../utils/CONSTS";

export const getAllMeteors = async () => {
    const res = await get(NASA_URL, {} )
    console.log(res.data)
    return res.data
}

export const getAllMeteorsInYear = async (year: string) => {
    const res = await get(NASA_URL, {year: year+YEAR_OFFSET} )

    console.log(res.data)
    return res.data
}

export const getLandingYears = async () => {
    const res= await get(NASA_URL, {})
    const years = res.data.map((row: any) => {return row.year})
    console.log (years)
    return years
}



