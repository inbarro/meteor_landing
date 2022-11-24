import {rawMeteorData, meteorData, YearObject} from "../interfaces";

export const getAllMeteorsFormattedYears = (meteors: Array<meteorData> | undefined) => {
    const years = meteors?.map(meteor => meteor.year)
    const yearsAsSet = YearsSetByYearValue(years)
    return yearsAsSet.sort((a , b) =>  a.name < b.name ? -1: 1)
}

const YearsSetByYearValue = (yearsObject: Array<YearObject> | undefined) => {
    const onlyYearsSet = new Set();
    const finalYearObjectsSet: YearObject[] = []
    yearsObject?.forEach((year) =>{
        if (!onlyYearsSet.has(year.name)) {
            finalYearObjectsSet.push(year)
            onlyYearsSet.add(year.name)
        }
    })
    return finalYearObjectsSet
}


export const formatRawMeteorData =(meteors: Array<rawMeteorData>) => {
    //suitable for autocomplete element
    const res =  meteors?.map(meteor => {
        return {...meteor , year: {name: meteor?.year?.split('-')[0], id: meteor?.id}} as meteorData
    })
    return res as Array<meteorData>
}