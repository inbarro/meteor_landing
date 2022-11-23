import React, {useEffect, useState} from 'react';
import {MeteorListComponent} from "../../components/meteorListComponenmt/meteorList.component";
import {SelectComponent} from '../../components/SelectComponent/select.component'
import {FilterComponent} from "../../components/filterComponent/filter.component";
import {getAllMeteors, } from '../../api/services/meteorLanding.service'
import {TitlesComponent} from "../../components/TitlesComponent/TitlesComponent"
import NoDataMessage from '../../components/noDataMessageComponent/noDataMessage.Component'
import {getAllMeteorsFormattedYears, pickYearMeteors, yearsSelectFormatting} from '../../helpers'
import {option} from '../../interfaces'

export function Home() {

    const [meteors, setMeteors] = useState([])
    const [yearsMeteors, setYearsMeteors] = useState([])
    const [yearsAndMassMeteors, setYearsAndMassMeteors] = useState([])
    const [massFilterValue, setMassFilterValue] = useState('')
    const [years, setYears] = useState<Array<string>>([])
    const [year, setYear] = useState<string>('')
    const [showNotFoundMessage, setShowNotFoundMessage] = useState(false)

    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            setYears(getAllMeteorsFormattedYears(newMeteors))
            setYear(years[0])
            setMeteors(newMeteors)
            setYearsMeteors(newMeteors)
            setMassFilterValue('')
            setYearsAndMassMeteors(newMeteors)
        })();
    },[]);

    useEffect( () => {
        setYear(years[0])
    }, [years])



        useEffect( () => {
        (async () => {
            const newMeteors: any = pickYearMeteors(meteors, year)
            setYearsMeteors(newMeteors)
            setYearsAndMassMeteors(newMeteors)

        })();
    },[year]);

    useEffect( () => {
        const newMeteors = yearsMeteors.filter( (meteor: any) => ( parseInt(meteor.mass)) >= (parseInt(massFilterValue)|| 0) )
        if (newMeteors.length === 0)
        {
            let newFilteredMeteors:any = meteors.filter( (meteor: any) => ( parseInt(meteor.mass)) >= (parseInt(massFilterValue)|| 0) )
            const newFilterYear = newFilteredMeteors[0]?.year
            handleYearSelect(newFilterYear)
            newFilteredMeteors = newFilteredMeteors.filter( (meteor: any) => ( meteor.year) === (newFilteredMeteors[0].year) )
            if(newFilteredMeteors.length > 0 )
                setShowNotFoundMessage(true)
            setYearsAndMassMeteors(newFilteredMeteors)
        }
        else {
            setYearsAndMassMeteors(newMeteors)}

    },[massFilterValue]);


    const handleFilterInput = (newFilerValue: any) => {
        setMassFilterValue(newFilerValue)
    }

    const handleYearSelect = (year: option |undefined) => {
        setYear(year?.value || '')
    }

    return (
        <div>
            <TitlesComponent/>
            <SelectComponent defaultValue={yearsSelectFormatting([year])[0]} options={yearsSelectFormatting(years)} handleYearSelect={handleYearSelect}/>
            <FilterComponent value={massFilterValue} handleInput={handleFilterInput}></FilterComponent>
            { showNotFoundMessage ?
                <NoDataMessage messageText={'The mass was not found, jumping to first-year where there is a mass that fits the criteria'}/>
                :
                <MeteorListComponent meteors={yearsAndMassMeteors} filterValue={massFilterValue}/>
            }
            {/*<Autocomplete*/}
        </div>
    );
}