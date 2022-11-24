
export interface meteorData  {
    name: string
    id:	string
    nametype: string
    recclass: string
    mass: number
    fall: string
    year: YearObject
    reclat: number
    reclong: number
    geolocation: Geolocation
}


export interface rawMeteorData {
    name: string
    id:	string
    nametype: string
    recclass: string
    mass: number
    fall: string
    year: string
    reclat: number
    reclong: number
    geolocation: Geolocation
}


interface Geolocation {
    type: string
    coordinates: Coordinates
}


interface Coordinates {
    0: number
    1: number
}


export interface MeteorListComponentProps {
    meteors: Array<meteorData>
    filterValue: string
}


export interface YearObject {
    id: string
    name: string
}


