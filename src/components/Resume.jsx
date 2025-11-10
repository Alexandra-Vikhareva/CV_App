import './Resume.css'

export function Resume({props}) {
    console.log(props)
    return (
        <div id="resume">
            <p>{props.generalInfo.name + ' ' 
            + props.generalInfo.secondName + ' '
            + props.generalInfo.position + ' '
            + props.generalInfo.phone + ' '
            + props.generalInfo.email}</p>

            <p>{props.educationInfo.university + ' ' 
            + props.educationInfo.specialization + ' '
            + props.educationInfo.graduationYear}</p>
        </div>
    )
}