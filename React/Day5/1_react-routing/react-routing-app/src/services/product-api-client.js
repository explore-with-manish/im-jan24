const url = process.env.REACT_APP_PRODUCTS_API_URL;

const productApiClient = {
    getAllProducts: function () {
        return new Promise((resolve, reject) => {
            let fData = {
                method: "GET",
                headers: {
                    "accept": "application/json"
                }
            };

            fetch(url, fData).then((response) => {
                response.json().then((data) => {
                    if (response.status === 403)
                        reject(data.message);
                    else
                        resolve(data);
                }).catch((err) => {
                    reject("Parsing Error");
                })
            }).catch((err) => {
                reject("Communication Error");
            });
        });
    }
};

export default productApiClient;