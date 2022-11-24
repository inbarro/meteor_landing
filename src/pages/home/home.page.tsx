import React, {useEffect, useState} from 'react';
import {MeteorListComponent} from "../../components/meteorListComponenmt/meteorList.component";
import {YearFilterComponent} from '../../components/yearFilterComponent/yearFilter.component'
import {FilterComponent} from "../../components/filterComponent/filter.component";
import {getAllMeteors, } from '../../api/services/meteorLanding.service'
import {TitlesComponent} from "../../components/TitlesComponent/TitlesComponent"
import NoDataMessage from '../../components/noDataMessageComponent/noDataMessage.Component'
import {pickYearMeteors} from '../../helpers/helpers'
import {getAllMeteorsFormattedYears} from '../../helpers/format.helper'
import {meteorData, YearObject} from '../../interfaces'
export function Home() {

    const [meteors, setMeteors] = useState<Array<meteorData>>([])
    const [yearsMeteors, setYearsMeteors] = useState([])
    const [yearsAndMassMeteors, setYearsAndMassMeteors] = useState<Array<meteorData>>([])
    const [massFilterValue, setMassFilterValue] = useState('')
    const [years, setYears] = useState<Array<any>>([])
    const [year, setYear] = useState<YearObject>({name: '', id:''})
    const [showNotFoundMessage, setShowNotFoundMessage] = useState(false)


    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            if (newMeteors) {
                setMeteors(newMeteors)
            }
        })();
    },[]);


    useEffect( () => {
        setYears( getAllMeteorsFormattedYears(meteors))
    },[meteors])


    useEffect( () => {
            const newMeteors: any = pickYearMeteors(meteors, year)
            setYearsMeteors(newMeteors)
            setYearsAndMassMeteors(newMeteors)
            setShowNotFoundMessage(false)
    },[year]);


    useEffect( () => {
        if(meteors&& massFilterValue) {
            const newMeteors = yearsMeteors.filter((meteor: any) => (parseInt(meteor.mass)) >= (parseInt(massFilterValue) || 0))
            if (newMeteors.length === 0) {
                let newFilteredMeteors: Array<meteorData> = meteors.filter((meteor: any) => (parseInt(meteor.mass)) >= (parseInt(massFilterValue) || 0))
                const newFilterYear = newFilteredMeteors[0]?.year
                handleYearSelect(newFilterYear)
                newFilteredMeteors = newFilteredMeteors.filter((meteor: any) => (meteor.year.name) === (newFilteredMeteors[0].year.name))
                if (newFilteredMeteors.length > 0) {
                    setShowNotFoundMessage(false)
                } else {
                    setShowNotFoundMessage(true)
                    setYearsAndMassMeteors(meteors)
                }
                setYearsAndMassMeteors(newFilteredMeteors)
            } else {
                setYearsAndMassMeteors(newMeteors)
                setShowNotFoundMessage(false)
            }
        }

    },[massFilterValue]);


    const handleFilterInput = (newFilerValue: any) => {
        setMassFilterValue(newFilerValue)
    }

    const handleYearSelect = (year: YearObject) => {
        if (year)
             setYear(year)

    }

    return (
        <div>
            <TitlesComponent/>
            <YearFilterComponent years={years} meteors={meteors} handleYearSelect={handleYearSelect}/>
            {(year.id.length > 0 && year.name.length > 0) && <FilterComponent value={massFilterValue} handleInput={handleFilterInput}></FilterComponent>}
            { showNotFoundMessage ?
                <NoDataMessage messageText={'The mass was not found, jumping to first-year where there is a mass that fits the criteria'}/>
                :
                <MeteorListComponent meteors={yearsAndMassMeteors} filterValue={massFilterValue}/>
            }
        </div>
    );
}