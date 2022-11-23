export interface meteorData  {
    name: string
    id:	number
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