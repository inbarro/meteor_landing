import './select.component.css'
import Select from 'react-select';
import {SelectComponentprops} from '../../interfaces'

export function SelectComponent(props : SelectComponentprops) {

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
