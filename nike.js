const searchForm = document.getElementById('search-form');

const searchInput = document.getElementById('search-input');



searchForm.addEventListener('submit', (event) => {

  event.preventDefault(); // Prevent page reload

  const query = searchInput.value;



  // Construct API URL with your API key

  const apiUrl = `https://api.example.com/search?query=${query}&key=YOUR_API_KEY`;



  fetch(apiUrl)

    .then(response => response.json())

    .then(data => {

      // Display search results from 'data' 

    })

    .catch(error => {

      console.error('Error fetching data:', error);

    });

});
