// https://sheet.best/admin/connection-detail/f32dc167-6732-46ae-b9aa-aa31f65d4bc1

// var today = new Date();
// var dd = String(today.getDate()).padStart(2, '0');
// var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
// var yyyy = today.getFullYear();

// today = mm + '/' + dd + '/' + yyyy;
// // document.write(today);
// dateField = page.getElementById("test-date")
document.getElementById('test-date').valueAsDate = new Date();

// class formSettings {
//     constructor (page) {
//         this.form = page.getElementById("test-form")
//         this.resetBtn = page.getElementById("test-reset")
//         this.sendBtn = page.getElementById("test-submit")
//         // Поля
//         this.project = page.getElementById("test-project")
//         this.date = page.getElementById("test-date")
//         this.data = page.getElementById("test-data")
//     }
//     bindBehavior = () => {
//         // Убираем обычный сабмит
//         // this.form.addEventListener("submit", (e) => {
//         //     e.preventDefault()
//         // })
//         // this.sendBtn.addEventListener("click", (e) => {
//         //     this.redrawLocalStorage()
//         // })
//     }
//     redrawLocalStorage = () => {
//         localStorage.setItem('project', this.project.value.trim())
//         localStorage.setItem('date', this.date.value.trim())
//         localStorage.setItem('data', this.data.value.trim())
//     }

// }

// let page = document
// const form = new formSettings(page) // Подключаемся к элементам страницы
// form.bindBehavior()





// let form = document.createElement('form');
// form.action = 'https://google.com/search';
// form.method = 'GET';

// form.innerHTML = '<input name="q" value="test">';

// // перед отправкой формы, её нужно вставить в документ
// document.body.append(form);

// form.submit();
