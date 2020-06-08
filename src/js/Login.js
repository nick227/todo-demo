export default class Login {
    constructor() {
        this.appId = '2636744946566075'
        this.scopes = ''
    }
    init(FB) {
        const self = this
        this.FB = FB
        this.FB.init({
            appId: this.appId,
            status: true,
            cookie: true,
            xfbml: true,
            version: 'v7.0'
        })
        this.FB.getLoginStatus(function(response) {
            if (response.status === 'connected') {
                self.FB.api('/me', function(response) {
                    var event = new CustomEvent("login", {
                        detail: response
                    })
                    window.dispatchEvent(event)
                })
            } else {
                self.error(response)
            }
        });

    }

    login() {
        const self = this
        this.FB.login(function(response) {
            if (response.status === 'connected') {
                self.FB.api('/me', function(response) {
                    var event = new CustomEvent("login", {
                        detail: response
                    })
                    window.dispatchEvent(event)
                })
            } else {
                self.error(response)
            }
        }, { scope: self.scopes })
    }
    logout() {
        this.FB.logout(function(response) {
            var event = new CustomEvent("logout", {
                detail: response
            })
            window.dispatchEvent(event)
        })

    }
    error(response) {
        console.log("error", response)
        var event = new CustomEvent("login-error", {
            detail: response
        })
        window.dispatchEvent(event)

    }
}