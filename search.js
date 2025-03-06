const searchInput = document.getElementById('search-input');
const suggestionsContainer = document.getElementById('suggestions-container');

// Sample data for autocomplete suggestions (places in Maharashtra)
const suggestions = [
    'Mumbai',
    'Pune',
    'Nashik',
    'Aurangabad',
    'Nagpur',
    'Kolhapur',
    'Solapur',
    'Lonavala',
    'Ratnagiri',
    'Mahabaleshwar',
    'Raigad',
    'Matheran',
    'Alibag',
    'Shirdi',
    'Ajanta Caves',
    'Ellora Caves',
    'Lavasa',
    'Panchgani',
    'Tarkarli',
    'Sinhagad Fort',
    'Bhimashankar',
    // Add more places here
];

searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    const matchedSuggestions = suggestions.filter(suggestion => suggestion.toLowerCase().includes(query));
    
    displaySuggestions(matchedSuggestions);
});

function displaySuggestions(suggestions) {
    suggestionsContainer.innerHTML = '';

    if (suggestions.length > 0) {
        suggestionsContainer.style.display = 'block';
        suggestions.forEach(suggestion => {
            const suggestionElement = document.createElement('div');
            suggestionElement.className = 'suggestion';
            suggestionElement.textContent = suggestion;
            suggestionElement.addEventListener('click', () => {
                searchInput.value = suggestion;
                suggestionsContainer.style.display = 'none';

                // Redirect the user to a corresponding website
                redirectToWebsite(suggestion);
            });
            suggestionsContainer.appendChild(suggestionElement);
        });
    } else {
        suggestionsContainer.style.display = 'none';
    }
}

function redirectToWebsite(place) {
    // Define the websites corresponding to each place
    const websiteMap = {
        'Mumbai': 'infomumbai.html',
        'Pune': 'infopune.html',
        'Nashik': 'infonasik.html',
        // Add more place-website mappings here
    };

    // Check if the selected place has a corresponding website
    if (websiteMap.hasOwnProperty(place)) {
        // Redirect the user to the corresponding website
        window.location.href = websiteMap[place];
    } else {
        // Handle cases where there's no corresponding website
        alert(`No website found for ${place}.`);
    }
}
