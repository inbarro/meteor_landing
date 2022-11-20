import {MeteorComponent} from "./MeteorComponent/Meteor.component";

export function MeteorListComponent(props: any) {
    const meteors = props.meteors
    const filterValue = props.filterValue
    return (
        <>
            <h2>MeteorListComponent</h2>
            <ul>
            {meteors.map((meteor: any) => <MeteorComponent meteor={meteor}/>)}
            </ul>
        </>
    );

}