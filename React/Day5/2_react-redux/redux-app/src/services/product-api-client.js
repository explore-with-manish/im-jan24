const url = process.env.REACT_APP_PRODUCTS_API_URL;

const productAPIClient = {
    getAllProducts: function () {
        var promise = new Promise((resolve, reject) => {
            return fetch(url).then((res) => {
                var result = res.json();
                result.then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                });
            }).catch((err) => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    },

    insertProduct: function (p) {
        const request = new Request(url, {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(p)
        });

        var promise = new Promise((resolve, reject) => {
            return fetch(request).then(res => {
                res.json().then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                })
            }).catch(error => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    },

    updateProduct: function (p) {
        const request = new Request(url + "/" + p.id, {
            method: 'PUT',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(p)
        });

        var promise = new Promise((resolve, reject) => {
            return fetch(request).then(res => {
                res.json().then((jResult) => {
                    resolve(jResult);
                }, (err) => {
                    reject("JSON Parse Error");
                })
            }).catch(error => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    },

    deleteProduct: function (p) {
        const request = new Request(url + "/" + p.id, {
            method: 'DELETE'
        });

        var promise = new Promise((resolve, reject) => {
            return fetch(request).then(res => {
                res.json().then(() => {
                    resolve("Record Deleted");
                }, (err) => {
                    reject("JSON Parse Error");
                })
            }).catch(error => {
                reject("Error connecting to the API");
            });
        });

        return promise;
    }
}

export default productAPIClient;