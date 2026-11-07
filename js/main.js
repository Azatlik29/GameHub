// Code used on every page: favorites, theme switcher, jQuery card events
const favorites = new FavoritesList('gamehub_favorites');

// ----- Theme switcher (choice is saved in localStorage) -----
function applyTheme(theme) {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.getElementById('theme-btn').textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
}

document.addEventListener('DOMContentLoaded', () => {
    let theme = loadData('gamehub_theme', 'dark');
    if (theme !== 'light') theme = 'dark';
    applyTheme(theme);

    document.getElementById('theme-btn').addEventListener('click', () => {
        theme = theme === 'dark' ? 'light' : 'dark';
        applyTheme(theme);
        saveData('gamehub_theme', theme);
    });
});

// ----- jQuery events (delegated, because cards are created by JavaScript) -----
$(document).on('click', '.fav-btn', function () {
    const id = Number($(this).data('id'));
    const saved = favorites.toggle(id);
    $(this).text(saved ? '♥ Saved' : '♡ Save');
    document.dispatchEvent(new Event('favoritesChanged'));
});

$(document).on('click', '.details-btn', function () {
    $(this).closest('.game-card-body').find('.game-desc').slideToggle(200);
});
