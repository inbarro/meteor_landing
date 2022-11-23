import './noDataMessageComponent.css'

type MessageType = {
    messageText : string
}

const NoDataMessage  = (props : MessageType) => {
    const messageText = props.messageText

    return (
        <div className={'messageWrapper'}>
            <div>{props.messageText}</div>
        </div>
    )
}

export default NoDataMessage