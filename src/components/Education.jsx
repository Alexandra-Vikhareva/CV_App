export function Education({onInputChange}) {
    return(
        <div className="form">
            <p>Образование</p>
            <form onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="university">Учебное заведение: </label>
                <input type="text" 
                name="university" 
                id="university"
                placeholder="МГУ" 
                onChange={(e) => onInputChange('university', e.target.value)}/>

                <label htmlFor="specialization">Направление: </label>
                <input type="text" 
                name="specialization" 
                id="specialization" 
                placeholder="ПМИ" 
                onChange={(e) => onInputChange('specialization', e.target.value)}/>

                <label htmlFor="graduationYear">Год окончания: </label>
                <input type="number" 
                name="graduationYear" 
                id="graduationYear" 
                placeholder="2025" 
                onChange={(e) => onInputChange('graduationYear', e.target.value)}/>
            </form>
        </div>
    )
}