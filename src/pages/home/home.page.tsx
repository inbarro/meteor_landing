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


    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            setMeteors(newMeteors)
            setYearsMeteors(newMeteors)
            setYearsAndMassMeteors(newMeteors)
        })();
    },[]);

    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteorsInYear(year)
            setYearsMeteors(newMeteors)
        })();
    },[year]);

    useEffect( () => {
        const newMeteors = yearsMeteors.filter( (meteor: any) => ( parseInt(meteor.mass)) > (parseInt(filterValue)|| 0) )
        setYearsAndMassMeteors(newMeteors)
    },[yearsAndMassMeteors]);

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
            <MeteorListComponent meteors={yearsAndMassMeteors} filterValue={filterValue}/>
        </div>

    );
}