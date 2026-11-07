// Home page: show the 3 best rated games from the array
const featured = document.getElementById('featured-games');
document.getElementById('stat-games').textContent = games.length;

const topGames = [...games].sort((a, b) => b.rating - a.rating).slice(0, 3);
topGames.forEach(game => {
    featured.insertAdjacentHTML('beforeend', `<div class="col-md-4">${game.createCard(favorites.has(game.id))}</div>`);
});
