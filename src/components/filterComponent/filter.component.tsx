import './filter.component.css'

const type = {

}

export function FilterComponent(props : any) {
    const value = props.value
    const handleInput = props.handleInput

    const handleChange = (event : any) => {
        console.log("Field changes")
        console.log(event.target.value)
        handleInput(event.target.value);

        console.log('value is:', event.target.value);
    };
    return (
        <div className={'filterWrapper'}>
            <div>Filter By Mass</div>
            <input
                type={'text'}
            className={'filterInput'}
            onChange={handleChange}
            />
        </div>
    );
}
