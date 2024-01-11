const url = process.env.REACT_APP_USER_API_URL;

const userApiClient = {
    getAllUsersAsync: async function () {
        try {
            // Use fetch to get data from the URL
            const response = await fetch(url);

            // Check if the response is OK (status code 200)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON data
            const data = await response.json();

            // Log or return the data
            console.log(data);
            return data;
        } catch (error) {
            // Handle any errors that occur during the fetch
            console.error('There was a problem fetching the data:', error);
        }
    }
};

export default userApiClient;