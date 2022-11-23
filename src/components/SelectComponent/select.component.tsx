import './select.component.css'
import Select from 'react-select';

interface propsType {
    defaultValue: option
    options: Array<option>
    handleYearSelect: (selectedOption: option) => void
}

interface option {
    value?: string
    label?: string
}


export function SelectComponent(props : propsType) {

    const handleOnSelect = (event: any) => {
        props.handleYearSelect(event)
    }

    return (
        <div className={'wrapper'}>
            <div className={'filterTitle'}>Filter By Year</div>
            <Select
                defaultValue={props.defaultValue}
                options={props.options}
                onChange={handleOnSelect}
            />
        </div>
    );
}
