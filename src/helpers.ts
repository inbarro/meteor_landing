import {meteorData} from './interfaces'

export const getAllMeteorsYears = (meteors: Array<meteorData>) => {
    return meteors.map(meteor => {
        return meteor.year
    })
}

export const pickYearMeteors = () => {

}