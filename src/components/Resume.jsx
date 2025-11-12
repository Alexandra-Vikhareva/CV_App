import html2pdf from 'html2pdf.js';
import { useRef } from 'react';

export function Resume({props}) {
    const resumeRef = useRef(null);

    const saveToPDF = () => {
        setTimeout(() => {
            const element = resumeRef.current;
            
            if (!element) {
                console.error('Element not found');
                return;
            }

            html2pdf()
                .from(element)
                .set({
                    margin: 10,
                    filename: 'resume.pdf',
                    html2canvas: { 
                        scale: 2,
                        useCORS: true
                    },
                    jsPDF: { 
                        orientation: 'portrait', 
                        unit: 'mm', 
                        format: 'a4' 
                    }
                })
                .save();
        }, 100);
    };

    return (

        <div>
            <div ref={resumeRef} id="resume">
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
                    <div className="container">
                        <div className="info">
                            <p className="organization">{props.educationInfo.university}</p>
                            <p className="specialization">{props.educationInfo.specialization}</p>
                            <p className="date">{'по ' + props.educationInfo.graduationYear}</p>
                        </div>
                        <div className="description">
                            <textarea name="achivements"
                            id="achivements"
                            disabled
                            spellcheck
                            rows={5}
                            value={props.educationInfo.achivements}>
                            </textarea>
                        </div>
                    </div>
                </div>

                <div className="workExperience">
                    <h2>Опыт Работы</h2>
                    <div className="container">
                        <div className="info">
                            <p className="organization">{props.workExperienceInfo.company}</p>
                            <p className="specialization">{props.workExperienceInfo.position}</p>
                            <p className="date">{'c ' + props.workExperienceInfo.startDate + ' ' +
                                                'по ' + props.workExperienceInfo.endDate}</p>
                        </div>
                        <div className="description">
                            <textarea name="responsibilities"
                            id="responsibilities"
                            disabled
                            spellcheck
                            rows={5}
                            value={props.workExperienceInfo.responsibilities}>
                            </textarea>
                        </div>
                    </div>
                </div>
                
                <div className="skills">
                    <h2>Навыки</h2>
                    <textarea name="skills" 
                    id="skills" 
                    disabled 
                    spellcheck 
                    rows={5}
                    value={props.skills}>

                    </textarea>
                </div>
            </div>

            <button className='saveToPDF'onClick={saveToPDF}>
                📄 Сохранить в PDF
            </button>

        </div>
        
    )
}