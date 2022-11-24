import './yearsFilter.component.css'
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {useEffect} from "react";


export function YearFilterComponent(props : any) {
    const handleYearSelect = props.handleYearSelect
    console.log(props.years)
    const t  = []

    useEffect( () => {

    },[])

        const handleOnSelect = (year:any) => {
        handleYearSelect(year)
    }

    const formatResult = (item:any) => {
        return (
            <>
                <span>{item}</span>
            </>
        )
    }

    return (
        <div className={'wrapper'}>
            <div className={'filterTitle'}>Filter By Year</div>
            <ReactSearchAutocomplete
                items={props.years}
                // onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                autoFocus
                formatResult={formatResult}
            />
        </div>
    );
}
