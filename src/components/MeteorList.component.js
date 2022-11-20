import {MeteorComponent} from "./Meteor.component";

export function MeteorListComponent(props) {
    const meteors = props.meteors
    return (
        <>
            <h2>MeteorListComponent</h2>
            <ul>
            {meteors.map((meteor) => <MeteorComponent name={meteor.name} />)}
            </ul>
        </>
    );

}