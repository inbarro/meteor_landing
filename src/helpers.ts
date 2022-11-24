import {meteorData} from './interfaces'

export const getAllMeteorsFormattedYegetAllMeteorsFormattedYearsars = (meteors: Array<meteorData>) => {
    const years =  meteors.map(meteor => {
        return meteor?.year?.split('-')[0]
    })
    let yearsSet = new Set(years)
    let yearsAsSet = [...yearsSet]
    yearsAsSet = yearsAsSet.
    return  yearsAsSet.sort((a: string, b:string) =>  a < b ? 1: -1)

}

export const pickYearMeteors = (meteors: any[], year: string | undefined) => {
    if (!year) return []
    else {

        return meteors.filter(meteor => meteor.year === year)
    }
}

export const yearsSelectFormatting = (years :Array<string>) => {
    return years.map(year => {
        return {value: year, label: formatYear(year)}
    })
}

const formatYear = (year: string) => {
    return year ? year?.split('-')[0] : undefined
}