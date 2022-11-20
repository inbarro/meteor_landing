export function FilterComponent(props) {
    const value = props.value
    const handleInput = props.handleInput

    const handleChange = event => {
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
