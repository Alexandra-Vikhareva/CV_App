import './App.css'

import { WorkExperience } from './components/WorkExperience'
import { Education } from './components/Education'
import { GeneralInformation } from './components/GeneralInformation'
import { Resume } from './components/Resume'
import { useState } from 'react'
import { Skill } from './components/Skill'

function App() {
  const [generalInfo, setGeneralInfo] = useState({
    name: '',
    secondName: '',
    position: '',
    phone: '',
    email: ''
  });

  const [educationInfo, setEducationInfo] = useState({
    university: '',
    specialization: '',
    graduationYear: '',
  });

  const [workExperienceInfo, setWorkExperianceInfo] = useState({
    company: '',
    position: '',
    startDate: '',
    endDate: ''
  })

  const [skills, setSkills] = useState('')

  function handleGeneralInfoChange(field, value) {
    setGeneralInfo(prev => ({ ...prev, [field]:value}))
  }

  function handleEducationInfoChange(field, value) {
    setEducationInfo(prev => ({ ...prev, [field]:value}))
  }

  function handleWorkExperienceInfoChange(field, value) {
    setWorkExperianceInfo(prev => ({ ...prev, [field]:value}))
  }

  function handleChange(value) {
    setSkills(value)
  }

  return (
    <div className='content'>
      <div className="forms">
        <GeneralInformation onInputChange={handleGeneralInfoChange}/>
        <Education onInputChange={handleEducationInfoChange}/>
        <WorkExperience onInputChange={handleWorkExperienceInfoChange}/>
        <Skill onInputChange={handleChange}/>
      </div>
      <div className="sheet">
        <Resume props={{generalInfo, educationInfo, workExperienceInfo, skills}}/>
      </div>
    </div>
  )
}

export default App
