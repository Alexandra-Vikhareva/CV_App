export function WorkExperience({onInputChange}) {
    return (
        <div className="form">
            <p>Опыт работы</p>
            <form>
                <label htmlFor="company">Компания: </label>
                <input type="text" 
                name="company" 
                id="company" 
                placeholder='Яндекс'
                onChange={(e) => onInputChange('company', e.target.value)}/>

                <label htmlFor="position">Позиция: </label>
                <input type="text" 
                name="position" 
                id="position" 
                placeholder='frontend-разработчик'
                onChange={(e) => onInputChange('position', e.target.value)}/>

                <label htmlFor="startDate">Дата трудоустройства: </label>
                <input type="date" 
                name="startDate" 
                id="startDate" 
                onChange={(e) => onInputChange('startDate', e.target.value)}/>

                <label htmlFor="endDate">Дата конца работы: </label>
                <input type="date" 
                name="endDate" 
                id="endDate" 
                onChange={(e) => onInputChange('endDate', e.target.value)}/>

                <label htmlFor="responsibilities">Ключевые Обязанности: </label>
                <textarea name="responsibilities" 
                id="responsibilities"
                placeholder="Кратко опишите свои основные обязанности" 
                maxLength={250}
                rows={5}
                onChange={(e) => onInputChange('responsibilities', e.target.value)}>
                </textarea>
            </form>
        </div>
    )
}