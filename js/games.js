// Games page: search, filter, sort and favorites
const grid = document.getElementById('game-grid');
const searchInput = document.getElementById('search-input');
const genreSelect = document.getElementById('genre-filter');
const sortSelect = document.getElementById('sort-select');
const favOnly = document.getElementById('fav-only');
const resultsCount = document.getElementById('results-count');

// returns a new sorted array
function sortGames(list, mode) {
    const sorted = [...list];
    if (mode === 'rating') sorted.sort((a, b) => b.rating - a.rating);
    else if (mode === 'price') sorted.sort((a, b) => a.price - b.price);
    else if (mode === 'name') sorted.sort((a, b) => a.title.localeCompare(b.title));
    return sorted;
}

function getVisibleGames() {
    let list = games.filter(game => game.matches(searchInput.value.trim(), genreSelect.value));
    if (favOnly.checked) {
        list = list.filter(game => favorites.has(game.id));
    }
    return sortGames(list, sortSelect.value);
}

function updateCount(shown) {
    resultsCount.textContent = `Showing ${shown} of ${games.length} games | Favorites: ${favorites.count()}`;
}

function renderGames() {
    const list = getVisibleGames();
    grid.innerHTML = '';
    for (const game of list) {
        grid.insertAdjacentHTML('beforeend', game.createCard(favorites.has(game.id)));
    }
    if (list.length === 0) {
        grid.innerHTML = '<p class="no-results">No games found. Try another search.</p>';
    }
    updateCount(list.length);
}

// fill the genre list from the array (no repeats)
function fillGenres() {
    const genres = [...new Set(games.map(game => game.genre))];
    for (const genre of genres) {
        const option = document.createElement('option');
        option.value = genre;
        option.textContent = genre;
        genreSelect.appendChild(option);
    }
}

searchInput.addEventListener('input', renderGames);
genreSelect.addEventListener('change', renderGames);
sortSelect.addEventListener('change', renderGames);
favOnly.addEventListener('change', renderGames);

document.getElementById('clear-favs').addEventListener('click', () => {
    favorites.clear();
    renderGames();
});

// do not redraw the whole grid when a card is saved (keeps opened details)
document.addEventListener('favoritesChanged', () => {
    if (favOnly.checked) renderGames();
    else updateCount(getVisibleGames().length);
});

fillGenres();
renderGames();
