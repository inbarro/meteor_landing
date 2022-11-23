import {MeteorComponent} from "../meteorComponent/meteor.component";
import './meteorListComponenmt.css'

export function MeteorListComponent(props: any) {
    const meteors = props.meteors
    return (
        <div>
            <div className={'titles'}>
                <div className={'mainTitle'}>We found {meteors.length} meteors!</div>
                <div className={'secondTitle'}>Here Are a few:</div>
            </div>
            <div className={'meteor-list'}>
                {meteors.map((meteor: any) =>
                    <MeteorComponent
                        key={meteor.id}
                        meteor={meteor}/>
                )}
            </div>
        </div>
    );

}