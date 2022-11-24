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

export interface MeteorListComponentProps {
    meteors: Array<meteorData>
    filterValue: string
}

export interface SelectComponentprops {
    defaultValue: option
    options: Array<option>
    handleYearSelect: (selectedOption: option) => void
}

export interface option {
    value?: string
    label?: string
}

