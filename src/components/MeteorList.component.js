import {MeteorComponent} from "./Meteor.component";

export function MeteorListComponent(props) {
    const meteors = props.meteors
    const filterValue = props.filterValue
    return (
        <>
            <h2>MeteorListComponent</h2>
            <ul>
            {meteors.map((meteor) => <MeteorComponent meteor={meteor}/>)}
            </ul>
        </>
    );

}