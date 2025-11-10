export function Skill({onInputChange}) {
    return (
        <div className="form">
            <p>Навыки</p>
            <form>
                <label htmlFor="skills">Навыки: </label>
                <textarea rows="4" 
                cols="50" 
                id='skills'
                onChange={(e) => {onInputChange(e.target.value)}}
                placeholder='Опишите все свои навыки'>
                </textarea>
            </form>
        </div>
    )
}