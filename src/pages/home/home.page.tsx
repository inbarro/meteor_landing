// @ts-ignore
import React, {useEffect, useState} from 'react';
import {MeteorListComponent} from "../../components/MeteorList.component";
import {YearFilterComponent} from '../../components/yearFilterComponent/yearFilter.component'
import {FilterComponent} from "../../components/filterComponent/Filter.component";
import {getAllMeteors, getAllMeteorsInYear, getLandingYears} from '../../api/services/meteorLanding.service'


export function Home() {

    const [meteors, setMeteors] = useState([])
    const [yearsMeteors, setYearsMeteors] = useState([])
    const [yearsAndMassMeteors, setYearsAndMassMeteors] = useState([])
    const [massFilterValue, setMassFilterValue] = useState('')
    const [year, setYear] = useState('')
    const [showNotFoundMessage, setShowNotFoundMessage] = useState(false)
    console.log('ShowNotFoundMessage: '+ showNotFoundMessage)


    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            setMeteors(newMeteors)
            setYearsMeteors(newMeteors)
            setMassFilterValue('')
            setYearsAndMassMeteors(newMeteors)
        })();
    },[]);
    //
    // useEffect( () => {
    //     setNotFoundMessage(NotFoundMessage)
    // },[NotFoundMessage]);

    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteorsInYear(year)
            setYearsMeteors(newMeteors)
            setYearsAndMassMeteors(newMeteors)

        })();
    },[year]);

    useEffect( () => {
        const newMeteors = yearsMeteors.filter( (meteor: any) => ( parseInt(meteor.mass)) >= (parseInt(massFilterValue)|| 0) )
        if (newMeteors.length === 0)
        {
            let newFilteredMeteors:any = meteors.filter( (meteor: any) => ( parseInt(meteor.mass)) >= (parseInt(massFilterValue)|| 0) )
            const newFilterYear = newFilteredMeteors[0]?.year.split("-")[0]
            handleYearSelect(newFilterYear)
            newFilteredMeteors = newFilteredMeteors.filter( (meteor: any) => ( meteor.year) === (newFilteredMeteors[0].year) )
            if(newFilteredMeteors.length > 0 )
                setShowNotFoundMessage(true)
            console.log('ShowNotFoundMessage: '+ showNotFoundMessage)
            setYearsAndMassMeteors(newFilteredMeteors)
        }
        else {
            setYearsAndMassMeteors(newMeteors)}
        console.log('ShowNotFoundMessage: '+ showNotFoundMessage)

    },[massFilterValue]);




    const handleFilterInput = (newFilerValue: any) => {
        setMassFilterValue(newFilerValue)
    }

    const handleYearSelect = (year: any) => {
        setYear(year)
    }

    return (
        <div>
            <h2>
                Home
            </h2>
            <YearFilterComponent handleYearSelect={handleYearSelect}/>
            <FilterComponent value={massFilterValue} handleInput={handleFilterInput}></FilterComponent>
            {showNotFoundMessage && <h2> The mass was not found, jumping to first-year where there is a mass that fits the criteria</h2>}
            <MeteorListComponent meteors={yearsAndMassMeteors} filterValue={massFilterValue}/>
        </div>

    );
}