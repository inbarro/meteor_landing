// @ts-ignore
import React, {useEffect, useState} from 'react';
import {MeteorListComponent} from "../../components/MeteorList.component";
import {FilterComponent} from "../../components/Filter.component";
import {getAllMeteors, getAllMeteorsInYear, getLandingYears} from '../../api/services/meteorLanding.service'


export function Home() {

    const [meteors, setMeteors] = useState([])
    const [filteredMeteors, setFilteredMeteors] = useState([])
    const [filterValue, setFilterValue] = useState('')


    useEffect( () => {
        (async () => {
            const newMeteors = await getAllMeteors()
            setMeteors(newMeteors)
            setFilteredMeteors(newMeteors)
        })();
    },[]);

    useEffect( () => {
        const newMeteors = meteors.filter( (meteor: any) => ( parseInt(meteor.mass)) > (parseInt(filterValue)|| 0) )
        setFilteredMeteors(newMeteors)
    },[filterValue]);

    const handleFilterInput = (newFilerValue: any) => {
        setFilterValue(newFilerValue)
    }

    return (
        <div>
            <h2>
                Home
            </h2>
            <FilterComponent value={filterValue} handleInput={handleFilterInput}></FilterComponent>
            <MeteorListComponent meteors={filteredMeteors} filterValue={filterValue}/>
        </div>

    );
}