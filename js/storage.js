// Helpers for localStorage. Data is saved as JSON and bad values are handled safely.
function saveData(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn('Cannot save data:', key);
    }
}

function loadData(key, fallback) {
    try {
        const raw = localStorage.getItem(key);
        return raw === null ? fallback : JSON.parse(raw);
    } catch (error) {
        return fallback; // broken JSON or storage blocked
    }
}
