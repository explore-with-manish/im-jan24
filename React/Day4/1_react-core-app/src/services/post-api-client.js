const url = process.env.REACT_APP_POST_API_URL;

const postApiClient = {
    getAllPostsUsingCB: function (successCB, errorCB) {
        fetch(url).then(response => {
            response.json().then(data => {
                successCB(data);
            }).catch(err => {
                errorCB("Parsing Error...");
            });
        }).catch(err => {
            errorCB("Communication Error...");
        });
    },

    getAllPostsUsingPromise: function () {
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                response.json().then(data => {
                    resolve(data);
                }).catch(err => {
                    reject("Parsing Error...");
                });
            }).catch(err => {
                reject("Communication Error...");
            });
        });
    },

    getAllPostsAsync: async function () {
        try {
            var response = await fetch(url);
            var data = await response.json();
            return data;
        } catch (err) {
            throw new Error("Communication Error...");
        }
    }
};

export default postApiClient;   