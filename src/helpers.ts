import {meteorData} from './interfaces'

export const getAllMeteorsYears = (meteors: Array<meteorData>) => {
    return meteors.map(meteor => {
        return meteor.year
    })
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
    return year ? year.split('-')[0] : undefined
}