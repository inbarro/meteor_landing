import './yearsFilter.component.css'
import React, {useEffect, useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {getLandingYears} from "../../api/services/meteorLanding.service";

const type = {

}

export function YearFilterComponent(props : any) {
    const handleYearSelect = props.handleYearSelect
    const [years, setYears] = useState([])

    useEffect( () => {
        (async () => {
            const years = await getLandingYears()
            setYears(years)
        })();
    },[]);


    const handleOnSearch = (string: string, results:any) => {
        console.log(string, results)
    }

    const handleOnHover = (result:any) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (year:any) => {
        // the item selected
        handleYearSelect(year.name)
        console.log(year.name)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item:any) => {
        return (
            <>
                <span>{item.name}</span>
            </>
        )
    }

    return (
        <div className={'wrapper'}>
            <div className={'filterTitle'}>Filter By Year</div>

            <ReactSearchAutocomplete
                items={years}
                onSearch={handleOnSearch}
                onHover={handleOnHover}
                onSelect={handleOnSelect}
                onFocus={handleOnFocus}
                autoFocus
                formatResult={formatResult}
            />

            {/*<AutoCompleteComponent dataSource={['hhh', '1923', '1922', '1987']} placeholder="Find a game"/>);*/}
        </div>
    );
}
