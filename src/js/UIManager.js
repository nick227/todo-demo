export default class UIManager {
    constructor(body) {
        this.user = {}
        this.severities = []
        this.statuses = []
        this.tasks = []
        this.body = body
        this.avatarElm = body.querySelector('.avatar')
        this.btnLoginElm = body.querySelector('.btn-login')
        this.taskListSection = body.querySelector('.task-list-section')
        this.setupLoginBtn()
    }
    update(action) {
        const self = this
        const uiEvents = {
            login: function() {
                self.avatarElm.setAttribute('title', this.userName)
                self.avatarElm.style.backgroundImage = 'url(' + 'http://graph.facebook.com/' + self.user.id + '/picture?type=small' + ')'
                self.btnLoginElm.innerHTML = "Logout"
                self.btnLoginElm.setAttribute('data-action', 'logout')
                return true
            },
            logout: function() {
                self.avatarElm.style.backgroundImage = 'url()'
                self.btnLoginElm.innerHTML = "login"
                self.btnLoginElm.setAttribute('data-action', 'login')
                self.taskListSection.innerHTML = ''
                self.body.classList.add('align-middle')
        		self.body.querySelector('.add-task-section').classList.add('hidden')
                return true
            },
            load: function() {
                self.setupAddTaskForm()
                self.setupHideElms()
                self.setupCalendarPicker()
                return true;
            }

        }
        uiEvents[action]()
    }
    setData(type, params) {
        if (Array.isArray(params)) {
            for (var i = 0, length1 = params.length; i < length1; i++) {
                this[type].push(params[i])
            }
        } else { //type is object
            for (var key in params) {
                this[type][key] = params[key]
            }

        }
    }
    addTask(task) {
        let row = document.createElement('div')
        row.classList.add('row', task.status.toLowerCase())
        row.setAttribute('data-task-id', task.id)
        /************---------------------*****/
        let title = document.createElement('h3')
        title.innerHTML = task.text
        /************---------------------*****/
        let p = document.createElement('p')
        p.classList.add('float-right')
        p.innerHTML = 'Finish by ' + task.target_completion_date
        /************---------------------*****/
        let p2 = document.createElement('p')
        p2.classList.add('severity', task.severity.toLowerCase())
        p2.innerHTML = 'Severity: ' + task.severity
        /************---------------------*****/
        let p3 = document.createElement('p')
        p3.classList.add('status')
        p3.innerHTML = 'Status: ' + task.status
        /************---------------------*****/
        let btnRemove = document.createElement('button')
        btnRemove.innerHTML = 'Delete'
        btnRemove.classList.add('event-task-remove')
        btnRemove.setAttribute('data-task-id', task.id)
        btnRemove.addEventListener('click', this.handleClick)
        /************---------------------*****/
        let btnComplete = document.createElement('button')
        btnComplete.innerHTML = 'Finished'
        btnComplete.classList.add('event-task-finish')
        btnComplete.setAttribute('data-task-id', task.id)
        if (task.status.toLowerCase() === 'complete') {
            btnComplete.setAttribute('disabled', true)
        }
        btnComplete.addEventListener('click', this.handleClick)
        /************---------------------*****/
        row.appendChild(btnRemove)
        row.appendChild(btnComplete)
        row.appendChild(title)
        row.appendChild(p)
        row.appendChild(p2)
        row.appendChild(p3)
        this.taskListSection.prepend(row)

    }
    handleClick(e) {
        e.preventDefault()
        const id = this.getAttribute('data-task-id')
        const row = document.querySelector('.row[data-task-id="' + id + '"]')
        if (this.classList.contains('event-task-remove')) {
            row.parentNode.removeChild(row)
            var event = new CustomEvent("delete-task", { detail: id })
            window.dispatchEvent(event)
        }
        if (this.classList.contains('event-task-finish')) {
            row.querySelector('.status').innerHTML = 'Status: Complete'
            row.classList.remove('pending')
            row.classList.add('complete')
            this.setAttribute('disabled', true)
            var event = new CustomEvent("complete-task", { detail: {"id":id, payload:{"status_id":2}} })
            window.dispatchEvent(event)
        }

    }
    setupLoginBtn() {
        this.btnLoginElm.onclick = function() {
            const action = this.getAttribute('data-action')
            if (action === 'login') {
                var event = new CustomEvent("click-login")
                window.dispatchEvent(event)
            }
            if (action === 'logout') {
                var event = new CustomEvent("click-logout")
                window.dispatchEvent(event)
            }
        }
    }
    setupCalendarPicker() {
        const inputElms = document.querySelectorAll('.event-calendar')
        for (var i = 0, length1 = inputElms.length; i < length1; i++) {
            let simplepicker = new SimplePicker({
                zIndex: 10
            })
            attachCalendar(inputElms[i], simplepicker)
        }

        function attachCalendar(elm, simplepicker) {
            elm.onfocus = function() {
                simplepicker.open()
            }
            simplepicker.on('submit', (date, readableDate) => {
                elm.value = readableDate;
            })
        }

    }
    setupHideElms() {
        const unhideElms = document.querySelectorAll('.event-unhide')
        for (var i = 0, length1 = unhideElms.length; i < length1; i++) {
            unhideElms[i].onclick = handleUnhide
        }

        function handleUnhide(e) {
            const className = this.getAttribute('data-target')
            const target = document.querySelector('.' + className)
            target.classList.toggle('hidden')
        }

    }
    setupAddTaskForm() {
        const self = this
    	self.body.classList.remove('align-middle')
        const form = self.body.querySelector('form.add-task')
        self.body.querySelector('.add-task-section').classList.remove('hidden')
        form.reset()
        form.addEventListener('submit', function(e) {
            e.preventDefault()
            const text = this.querySelector('input[name="text"]')
            const target_completion_date = this.querySelector('input[name="target_completion_date"]')
            const payload = {
                text: this.querySelector('input[name="text"]').value,
                target_completion_date: this.querySelector('input[name="target_completion_date"]').value,
                severity: this.querySelector('select[name="severity"]').value,
                user_id: self.user.id,
                status: this.querySelector('input[name="status"]').value
            }
        	form.reset()
            var event = new CustomEvent("post-task", { detail: payload })
            window.dispatchEvent(event)
        })

    }
    closest(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i,
            el = this
        do {
            i = matches.length
            while (--i >= 0 && matches.item(i) !== el) {}
        } while ((i < 0) && (el = el.parentElement))
        return el
    }

}