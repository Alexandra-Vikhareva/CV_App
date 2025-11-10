import './Education.css'

export function Education({onInputChange}) {
    return(
        <div id="educationForm">
            <p>Образование</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="university">Учебное заведение: </label>
                <input type="text" 
                name="university" 
                id="university" 
                onChange={(e) => onInputChange('university', e.target.value)}/>

                <label htmlFor="specialization">Направление: </label>
                <input type="text" 
                name="specialization" 
                id="specialization" 
                onChange={(e) => onInputChange('specialization', e.target.value)}/>

                <label htmlFor="graduationYear">Год окончания: </label>
                <input type="number" 
                name="graduationYear" 
                id="graduationYear" 
                onChange={(e) => onInputChange('graduationYear', e.target.value)}/>
            </form>
        </div>
    )
}