function testTryCatch() {
    // ОТРАБОТКА ИСКЛЮЧИТЕЛЬНЫХ СИТУАЦИЙ. Иск Сит это ошибка которая не ведет к полному краху приложения, что именно считать исключительной ситуацией решает сам программист, консткукция try catch позволяет отрабатывать такие ситуации, применять их следует при асинхронном программировании либо при взаимодействии с сервером могут быть случаи когда даные не были загруженны полностью  

    let a = 10;
    try {
        console.log(a1);
    } catch (error) {

        // класический способ вывести сообщение об ошибке
        // console.log(error.name, error.message);

        // можно создать свою ошибку
        // throw new Error("Что-то пошло не так");

        // можно даже указать конкретный тип ошибки
        // throw new TypeError("Что-то пошло не так");

        // иди создать новую ошибку
        throw { name: "Ошибка", message: "Переменная не существует" }
    }
}

testTryCatch();