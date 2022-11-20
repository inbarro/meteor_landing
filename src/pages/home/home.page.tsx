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
    const [filterValue, setFilterValue] = useState('')
    const [year, setYear] = useState('')
    const [NotFoundMessage, setNotFoundMessage] = useState(false)



    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            setMeteors(newMeteors)
            setYearsMeteors(newMeteors)
            setFilterValue('')
            setYearsAndMassMeteors(newMeteors)
            // setNotFoundMessage(false)
        })();
    },[]);

    useEffect( () => {
        setNotFoundMessage(NotFoundMessage)
    },[NotFoundMessage]);

    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteorsInYear(year)
            setYearsMeteors(newMeteors)
            setYearsAndMassMeteors(newMeteors)

        })();
    },[year]);

    useEffect( () => {
        const newMeteors = yearsMeteors.filter( (meteor: any) => ( parseInt(meteor.mass)) > (parseInt(filterValue)|| 0) )
        if (newMeteors.length === 0)
        {
            let newMeteors2:any = meteors.filter( (meteor: any) => ( parseInt(meteor.mass)) >= (parseInt(filterValue)|| 0) )
            const newFilterYear = newMeteors2[0]?.year.split("-")[0]
            handleYearSelect(newFilterYear)
            newMeteors2 = newMeteors2.filter( (meteor: any) => ( meteor.year) === (newMeteors2[0].year) )
            setNotFoundMessage(true)
            setYearsAndMassMeteors(newMeteors2)
        }
        else {
            setYearsAndMassMeteors(newMeteors)}
    },[filterValue]);




    const handleFilterInput = (newFilerValue: any) => {
        setFilterValue(newFilerValue)
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
            <FilterComponent value={filterValue} handleInput={handleFilterInput}></FilterComponent>
            <h2 hidden={NotFoundMessage}> The mass was not found, jumping to first-year where there is a mass that fits the criteria</h2>
            <MeteorListComponent meteors={yearsAndMassMeteors} filterValue={filterValue}/>
        </div>

    );
}