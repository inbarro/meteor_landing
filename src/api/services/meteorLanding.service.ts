import {get} from '../axios'
import {NASA_URL, YEAR_OFFSET} from "../../utils/CONSTS";

export const getAllMeteors = async () => {
    const res = await get(NASA_URL, {} )
    return res.data.sort((a: any, b:any) => a.year < b.year)
}

export const getAllMeteorsInYear = async (year: string) => {
    const res = await get(NASA_URL, {year: year+YEAR_OFFSET} )
    return res.data
}

export const getLandingYears = async () => {
    let id = 0
    let res= (await get(NASA_URL, {})).data
    let exist_years = new Set();
    res = res.map((row: any) => {
        let year =  row.year ? row.year : ''
        let splitted_year = year.split('-')[0]
        if (!exist_years.has(splitted_year))
        {
            exist_years.add(splitted_year)
            return {name:splitted_year, id: id}
        }
    })
    res.sort((a: any, b: any) => a.name - b.name);

    return res
}



