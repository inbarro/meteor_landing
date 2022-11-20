import React, {useEffect, useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {getLandingYears} from "../../api/services/meteorLanding.service";

const type = {

}

export function YearFilterComponent(props : any) {
    const value = props.value
    const handleInput = props.handleInput
    const [years, setYears] = useState([])

    useEffect( () => {
        (async () => {
            const years = await getLandingYears()
            setYears(years)
        })();
    },[]);


    const handleOnSearch = (string: string, results:any) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const handleOnHover = (result:any) => {
        // the item hovered
        console.log(result)
    }

    const handleOnSelect = (year:any) => {
        // the item selected
        console.log(year)
    }

    const handleOnFocus = () => {
        console.log('Focused')
    }

    const formatResult = (item:any) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span>
            </>
        )
    }

    return (
        <div className={'filterWrapper'}>
            <div>filer</div>

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
