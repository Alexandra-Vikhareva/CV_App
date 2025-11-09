import './GeneralInformation.css'

export function GeneralInformation() {
    return (
        <>
            <div id="generalInformationForm">
                <p>Общая информация</p>
                <form >
                    <label htmlFor="name"> Имя: </label>
                    <input type="text" 
                    placeholder="Иван"
                    id="name"
                    name="name"
                    required/>

                    <label htmlFor="secondName"> Фамилия: </label>
                    <input type="text" 
                    placeholder="Иванов"
                    id="secondName"
                    name="secondName"
                    required/>

                    <label htmlFor="position"> Должность: </label>
                    <input type="text" 
                    placeholder="Разработчик"
                    id="position"
                    name="position"
                    required/>

                    <label htmlFor="phone"> Телефон: </label>
                    <input type="tel" 
                    placeholder="+79021234567"
                    id="phone"
                    name="phone"
                    required/>

                    <label htmlFor="email"> Email: </label>
                    <input type='email' 
                    placeholder="ivanushka@yandex.ru"
                    id="email"
                    name="email"
                    required/>

                    <button type='button'> Сохранить </button>
                </form>
            </div>
        </>
    )
}