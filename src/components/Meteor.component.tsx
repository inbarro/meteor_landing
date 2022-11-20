export function MeteorComponent(props : any) {
    const meteor = props.meteor
    return (
        <div>
            <div>name : {meteor.name}</div>
            <div>year : {meteor.year}</div>
            <div>mass: {meteor.mass}</div>
        </div>
);
}
