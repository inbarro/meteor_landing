import './select.component.css'
import React, {useEffect, useState} from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import {getLandingYears} from "../../api/services/meteorLanding.service";
import Select from 'react-select';

interface propsType {
    value: string
    options: Array<string>
    handleYearSelect: (selectedOption: string) => void
}


interface option {
    value: string
    label: string
}

export function SelectComponent(props : propsType) {

    const selectOptions: any =
        props.options.map(item => {
            return {value: item, label: item}
        })


    const handleOnSelect = (selection: option) => {
        props.handleYearSelect(selection.value)
    }

    return (
        <div className={'wrapper'}>
            <div className={'filterTitle'}>Filter By Year</div>
            <Select
                value={props.value}
                options={selectOptions}
                onChange={() => handleOnSelect}
            />
        </div>
    );
}
