// import { getRandomInt } from "./random.mjs"; не работает на ноде хз почему
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function task1() {
    // 1 - Сделайте функцию, возвращающую промис, внутри которого установлена случайная задержка от 1 до 10 секунд. Пусть своим результатом промис возвращает эту задержку. С помощью цикла и вашей функции заполните массив 10-ю промисами.
    // 2 - Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелся результат первого сработавшего промиса.
    // 3 - Используя массив промисов из предыдущей задачи сделайте так, чтобы в консоль вывелась сумма результатов всех промисов.

    function createNewPromise() {
        let time = getRandomInt(1, 10) * 1000;
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(time / 1000);
            }, time);
        });
    }

    // 1 - solution
    let arrPromises = [];
    for (let i = 1; i <= 10; i += 1) {
        arrPromises.push(createNewPromise());
    }

    // 2 - solution
    Promise.race(arrPromises).then((result) => {
        console.log(result);
    });

    // 3 - solution
    Promise.all(arrPromises).then((result) => {
        console.log(result.reduce((sum, item) => {
            return sum += item;
        }, 0));
    });
}


function task2() {
    // 1 - Самостоятельно, не подсматривая в мой код, выполните промисификацию загрузки картинок. Потестируйте полученный код.
    // 2 - Напишите код, который дождется окончания загрузки всех картинок, а затем добавит их в цикле в конец body.

    function loadImage(pathToImage) {
        return new Promise((resolve, reject) => {
            let image = document.createElement("img");
            image.src = pathToImage;

            image.addEventListener("load", () => {
                resolve(image);
            });
            image.addEventListener("error", () => {
                reject(new Error(`image -> ${pathToImage} loadError`));
            });
        });
    }

    // 1 - solution
    loadImage("https://kartinki.pics/uploads/posts/2022-12/thumbs/1672135042_kartinkin-net-p-milie-kartinki-nezuko-oboi-20.jpg").then((image) => {
        document.body.append(image);
    }).catch((error) => { console.log(error) });

    // 2 - solution
    let arr = [
        "https://kartinki.pics/uploads/posts/2022-12/1672128963_kartinkin-net-p-fenek-kartinki-krasivo-20.jpg",
        "https://kartinki.pics/uploads/posts/2022-12/1672134729_kartinkin-net-p-kartinki-bez-slov-krasivo-35.jpg",
    ];

    arr = arr.map((itemOfArr) => {
        return loadImage(itemOfArr);
    });

    Promise.all(arr).then((images) => {
        images.map((image) => {
            document.body.append(image);
        });
    }).catch((error) => {
        console.log(error);
    });
}

async function task3() {
    // Перепишите следующий код через синхронный синтаксис: код можно найти по ссылке https://code.mu/ru/javascript/book/supreme/promises/sync-style/

    function getSmth(num) {
        return new Promise((resolve, reject) => {
            if (num > 1) {
                setTimeout(() => {
                    resolve(num * num);
                }, 3000)
            } else {
                reject(new Error(`error ${num} < 1`));
            }
        });
    }

    let arr = [2, 3, 4, 5, 0];
    let sum = 0;

    for (let itemOfArr of arr) {
        try {
            sum += await getSmth(itemOfArr);
        }
        catch (error) {
            console.log(new Error("Произошла ошибка -> число < 1"));
        }
    };

    console.log(sum);
}

// task1();
// task2();
// task3();