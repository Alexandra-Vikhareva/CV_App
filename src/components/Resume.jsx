export function Resume({props}) {
    return (
        <div id="resume">
            <div className="generalInfo">
                <p className="name">{props.generalInfo.name}</p>
                <p className="secondName">{props.generalInfo.secondName}</p>
                <p className="position">{props.generalInfo.position}</p>
            </div>

            <div className="contacts">
                <div className="phone">
                    <img src="src/icons/call.svg"/>
                    <p>{props.generalInfo.phone}</p>
                </div>
                <p>{' • '}</p>
                <div className="email">
                    <img src="src/icons/mail.svg"/>
                    <p>{props.generalInfo.email}</p>
                </div>
            </div>

            <div className="education">
                <h2>Образование</h2>
                <div>
                    <p className="organization">{props.educationInfo.university}</p>
                    <p className="specialization">{props.educationInfo.specialization}</p>
                    <p className="date">{'по ' + props.educationInfo.graduationYear}</p>
                </div>
            </div>

            <div className="workExperience">
                <h2>Опыт Работы</h2>
                <div>
                    <p className="organization">{props.workExperienceInfo.company}</p>
                    <p className="specialization">{props.workExperienceInfo.position}</p>
                    <p className="date">{'c ' + props.workExperienceInfo.startDate + ' ' +
                                        'по ' + props.workExperienceInfo.endDate}</p>
                </div>
            </div>
            
            <div className="skills">
                <h2>Навыки</h2>
                <textarea 
                name="skills" 
                id="skills" 
                disabled 
                spellcheck 
                rows={10}
                value={props.skills}>

                </textarea>
            </div>
        </div>
    )
}