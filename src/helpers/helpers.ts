import {meteorData, YearObject} from '../interfaces'

export const pickYearMeteors = (meteors: Array<meteorData>, year: YearObject) => {
    console.log('pickYearMeteors year : '+ JSON.stringify(year))
    const res =  meteors.filter(meteor => meteor.year.name === year?.name)
    console.log('pickYearMeteors res : '+ res)
    return res
}


