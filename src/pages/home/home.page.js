import React, {useEffect, useState} from 'react';
import {MeteorListComponent} from "../../components/MeteorList.component";
import {FilterComponent} from "../../components/Filter.component";
import {getAllMeteors, getAllMeteorsInYear} from '../../api/services/meteorLanding.service'


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
        const newMeteors = meteors.filter( meteor =>  parseInt(meteor.mass) > parseInt(filterValue) )
        setFilteredMeteors(newMeteors)
    },[filterValue]);

    const handleFilterInput = (newFilerValue) => {
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