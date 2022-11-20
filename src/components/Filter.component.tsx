const type = {

}

export function FilterComponent(props : any) {
    const value = props.value
    const handleInput = props.handleInput

    const handleChange = (event : any) => {
        handleInput(event.target.value);

        console.log('value is:', event.target.value);
    };
    return (
        <div className={'filterWrapper'}>
            <div>filer</div>
            <input
                type={'text'}
            className={'filterInput'}
            onChange={handleChange} //TODO
            />
        </div>
    );
}
