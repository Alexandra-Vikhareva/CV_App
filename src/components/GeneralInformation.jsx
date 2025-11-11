export function GeneralInformation({onInputChange}) {

    return (
        <>
            <div className="form">
                <p>Общая информация</p>
                <form onSubmit = {e => e.preventDefault()}>
                    <label htmlFor="name"> Имя: </label>
                    <input type="text" 
                    placeholder="Иван"
                    id="name"
                    name="name"
                    maxLength={15}
                    onChange = {(e) => onInputChange('name', e.target.value)}/>

                    <label htmlFor="secondName"> Фамилия: </label>
                    <input type="text" 
                    placeholder="Иванов"
                    id="secondName"
                    name="secondName"
                    maxLength={20}
                    onChange = {(e) => onInputChange('secondName', e.target.value)}/>

                    <label htmlFor="position"> Должность: </label>
                    <input type="text" 
                    placeholder="Разработчик"
                    id="position"
                    name="position"
                    onChange = {(e) => onInputChange('position', e.target.value)}/>

                    <label htmlFor="phone"> Телефон: </label>
                    <input type="tel" 
                    placeholder="+79021234567"
                    id="phone"
                    name="phone"
                    onChange = {(e) => onInputChange('phone', e.target.value)}/>

                    <label htmlFor="email"> Email: </label>
                    <input type='email' 
                    placeholder="ivanushka@yandex.ru"
                    id="email"
                    name="email"
                    onChange = {(e) => onInputChange('email', e.target.value)}/>

                </form>
            </div>
        </>
    )
}