document.addEventListener('DOMContentLoaded', function() {
    async function fetchUserData() {
        const apiUrl = 'https://jsonplaceholder.typicode.com/users';
        const dataContainer = document.getElementById('api-data');

        try {
            // Fetch data from the API
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const users = await response.json();

            // Clear the loading message
            dataContainer.innerHTML = '';

            // Create a list element
            const userList = document.createElement('ul');

            // Loop through the users and create list items
            users.forEach(user => {
                const listItem = document.createElement('li');
                listItem.textContent = user.name;
                userList.appendChild(listItem);
            });

            // Append the list to the data container
            dataContainer.appendChild(userList);
        } catch (error) {
            // Handle any errors
            dataContainer.innerHTML = 'Failed to load user data.';
            console.error('Error fetching user data:', error);
        }
    }

    // Invoke the fetchUserData function
    fetchUserData();
});