import Login from './Login';
import UIManager from './UIManager';
import DataManager from './DataManager';
const ui = new UIManager(document.querySelector('body'))
const data = new DataManager()
const login = new Login()
window.fbAsyncInit = function() {
    login.init(FB)
}
let url = null
window.addEventListener("login", function(userData) {
    ui.setData('user', userData.detail)
    ui.update('login')
    url = "task/severity/all"
    data.request(url).then(function(res) {
        ui.setData('severities', res)
    })
    ui.update('load')
    url = "task/" + userData.detail.id
    console.log(url)
    data.request(url).then(function(tasks) {
        for (var i = 0, length1 = tasks.length; i < length1; i++) {
            let task = tasks[i]
            ui.addTask(task)
        }
    })
})
window.addEventListener("logout", function(e) {
    ui.setData('user', e.detail)
    ui.update('logout')
})

window.addEventListener("click-login", function(e) {
    login.login(e.detail)
})
window.addEventListener("click-logout", function(e) {
    login.logout(e.detail)
})
window.addEventListener("post-task", function(e) {
    data.post('task/', e.detail).then(function(res) {
        ui.addTask(e.detail)
    })
})
window.addEventListener("delete-task", function(e) {
    data.delete('task/' + e.detail).then(function(res) {
    })
})
window.addEventListener("complete-task", function(e) {
    data.update('task/' + e.detail.id, e.detail.payload).then(function(res) {
        console.log('res')
        console.log(res)
    })
})