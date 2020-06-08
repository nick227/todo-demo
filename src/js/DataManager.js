export default class DataManager {
    constuctor() {
        this.types = ['task']
    }
    request(url) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: "GET",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response.status);
                } else {
                    return response.json()
                }
            }).then(data => {
                resolve(data)
            })

        })

    }
    post(url, payload) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            }).then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response.status);
                } else {
                    return resolve(response)
                }
            })

        })
    }
    update(url, payload) {
    	const self = this
        return new Promise(function(resolve, reject) {
            console.log("updaaate..")
            console.log(url)
            payload = self.jsonToUrlEncoded(payload)
            console.log(payload)
            fetch(url, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: payload
            }).then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response.status);
                } else {
                    return resolve(response)
                }
            })

        })
    }
    delete(url) {
        return new Promise(function(resolve, reject) {
            fetch(url, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(response => {
                if (response.status !== 200) {
                    alert('Error: ' + response.status);
                } else {
                    return resolve(response.json())
                }
            })

        })
    }
    jsonToUrlEncoded(element, key, list) {
        var list = list || [];
        if (typeof(element) == 'object') {
            for (var idx in element)
                this.jsonToUrlEncoded(element[idx], key ? key + '[' + idx + ']' : idx, list);
        } else {
            list.push(key + '=' + encodeURIComponent(element));
        }
        return list.join('&');
    }
}