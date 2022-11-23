import './meteor.componenmt.css'

export function MeteorComponent(props : any) {
    const meteor = props.meteor
    return (

        <div className={'card-container'}>
            <div className={'meteor-card'}>
                <div>Name : {meteor.name}</div>
                <img alt='.' src={require('../../DCIM/MeteorImage.png')}/>
                <div>Year : {meteor.year?.split("-")[0]}</div>
                <div>Mass : {meteor.mass}</div>

            </div>
        </div>
);
}
