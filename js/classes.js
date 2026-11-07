// Class for one game. Every game in the site is an object of this class.
class Game {
    constructor(id, title, genre, platforms, price, rating, description) {
        this.id = id;
        this.title = title;
        this.genre = genre;
        this.platforms = platforms;
        this.price = price;
        this.rating = rating;
        this.description = description;
        this.image = `https://picsum.photos/seed/${title.replace(/ /g, '')}/400/240`;
    }

    getPriceText() {
        return this.price === 0 ? 'Free' : '$' + this.price.toFixed(2);
    }

    // true if the game fits the search text and the chosen genre
    matches(text, genre) {
        const okText = this.title.toLowerCase().includes(text.toLowerCase());
        const okGenre = genre === 'All' || this.genre === genre;
        return okText && okGenre;
    }

    createCard(isFavorite) {
        return `
        <article class="game-card" data-id="${this.id}">
            <span class="badge-genre">${this.genre}</span>
            <img src="${this.image}" alt="${this.title} cover" class="img-fluid">
            <div class="game-card-body">
                <h3 class="h5">${this.title}</h3>
                <p class="mb-1">Platforms: ${this.platforms}</p>
                <p class="mb-2">Rating: ${this.rating} / 5 | ${this.getPriceText()}</p>
                <p class="game-desc">${this.description}</p>
                <button class="btn btn-sm btn-accent details-btn" type="button">Details</button>
                <button class="btn btn-sm btn-outline-danger fav-btn" type="button" data-id="${this.id}">${isFavorite ? '♥ Saved' : '♡ Save'}</button>
            </div>
        </article>`;
    }
}

// Class that keeps favorite game ids and saves them in localStorage
class FavoritesList {
    constructor(storageKey) {
        this.storageKey = storageKey;
        const saved = loadData(storageKey, []);
        this.ids = Array.isArray(saved) ? saved : [];
    }

    has(id) {
        return this.ids.includes(id);
    }

    toggle(id) {
        if (this.has(id)) {
            this.ids = this.ids.filter(item => item !== id);
        } else {
            this.ids.push(id);
        }
        this.save();
        return this.has(id);
    }

    clear() {
        this.ids = [];
        this.save();
    }

    count() {
        return this.ids.length;
    }

    save() {
        saveData(this.storageKey, this.ids);
    }
}
