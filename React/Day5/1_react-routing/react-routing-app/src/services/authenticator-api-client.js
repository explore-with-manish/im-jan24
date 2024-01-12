const url = process.env.REACT_APP_TOKEN_URL;

const authenticatorClient = {
    isAuthenticated: false,

    login: function (uname, pwd) {
        return new Promise((resolve, reject) => {
            var data = `username=${uname}&password=${pwd}`;

            let fData = {
                method: "POST",
                headers: {
                    "content-type": "application/x-www-form-urlencoded"
                },
                body: data
            };

            fetch(url, fData).then((response) => {
                response.json().then((data) => {
                    if (data.success) { 
                        sessionStorage.setItem('tk', data.token);
                        this.isAuthenticated = data.success;
                        resolve(data.message);
                    } else {
                        reject(data.message);
                    }
                }).catch((err) => {
                    reject("Parsing Error");
                })
            }).catch((err) => {
                reject("Communication Error");
            });
        });
    },

    logout: function() {
        sessionStorage.removeItem('tk');
        this.isAuthenticated = false;
    },

    getToken: function() {
        return sessionStorage.getItem('tk');
    }
};

export default authenticatorClient;