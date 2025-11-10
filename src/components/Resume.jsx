import './Resume.css'

export function Resume({props}) {
    return (
        <div id="resume">
            <p>{props.name + ' ' 
            + props.secondName + ' '
            + props.position + ' '
            + props.phone + ' '
            + props.email}</p>
        </div>
    )
}