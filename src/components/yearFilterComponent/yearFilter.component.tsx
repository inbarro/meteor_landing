import './yearsFilter.component.css'
import React, {useEffect} from "react";
import { ReactSearchAutocomplete } from 'react-search-autocomplete'


export function YearFilterComponent(props : any) {
    const handleYearSelect = props.handleYearSelect


    const handleOnSelect = (year:string) => {
        handleYearSelect(year)
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
            <div className={'filterTitle'}>Search By Year</div>
            <ReactSearchAutocomplete
                items={props.years}
                onSelect={handleOnSelect}
                formatResult={formatResult}
            />
        </div>
    );
}
