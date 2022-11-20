import {MeteorListComponent} from "../../components/MeteorList.component";
import {getAllMeteors} from '../../api/services/meteorLanding.service'
import React, {useEffect, useState} from 'react';


export function Home() {
    // const meteors = [{"name":"Aachen","id":"1","nametype":"Valid","recclass":"L5","mass":"21","fall":"Fell","year":"1880-01-01T00:00:00.000","reclat":"50.775000","reclong":"6.083330","geolocation":{"type":"Point","coordinates":[6.08333,50.775]}}
    //     ,{"name":"Aarhus","id":"2","nametype":"Valid","recclass":"H6","mass":"720","fall":"Fell","year":"1951-01-01T00:00:00.000","reclat":"56.183330","reclong":"10.233330","geolocation":{"type":"Point","coordinates":[10.23333,56.18333]}}]


    const [meteors, setMeteors] = useState([]);

    useEffect( () => {
        let newMeteors = []
        const getMeteors = async () => {
            newMeteors = await getAllMeteors()
            setMeteors(newMeteors)
        }
        getMeteors().catch(console.error)
    });

    // const meteors = await getAllMeteorsllMeteors()

    return (
        <>
            <h2>
                Home
            </h2>
            <MeteorListComponent meteors ={meteors}/>
        </>

    );
}

