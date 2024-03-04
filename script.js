// import getRandomInt from "./random.js";

function testTryCatch() {
    // ОТРАБОТКА ИСКЛЮЧИТЕЛЬНЫХ СИТУАЦИЙ. Иск Сит это ошибка которая не ведет к полному краху приложения, что именно считать исключительной ситуацией решает сам программист, консткукция try catch позволяет отрабатывать такие ситуации, применять их следует при взаимодействии с сервером могут быть случаи когда даные не были загруженны полностью  

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


function testPromise() {
    // Промис - это инструмент который позволяет приистановливать некоторый код и дожидаца его выпления или фейла
    let promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            let isError = false;

            if (!isError) {
                resolve('success');
            } else {
                reject(new Error('error'));
            }
        }, 3000);
    });

    promise.catch((error) => {
        throw error;
    });
}


function testArrPromises() {
    let promises = [
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(1);
            }, 1000);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(2);
            }, 2000);
        }),
        new Promise((resolve) => {
            setTimeout(() => {
                resolve(3);
            }, 2000);
        }),
    ];

    // Подождать пока все промисы в массиве отработают
    Promise.all(promises).then((result) => {
        console.log(result);
    });

    // Подождать пока отработает только первый промис не по порядку а по скорости работы
    Promise.race(promises).then((result) => {
        console.log(result);
    });

    // Можно отслежывать состояние промисов они могут быть выполены не выполнены и в ожидании
}

// testTryCatch();
// testPromise();
testArrPromises();
