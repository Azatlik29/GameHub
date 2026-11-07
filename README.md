# GameHub

**Course:** Web Technologies - Midterm, Endterm and Final project (one project, three stages)
**Group:** SE-2526
**Members:** Azat Zholdygali (add other group members here)
**Live site:** add your GitHub Pages link here
**Repository:** add your GitHub link here

## Description
GameHub is a responsive website for a gaming community. Pages: Home, Games, Tournaments, About, Contact.


## Features by stage
**Midterm:** 5 pages, Bootstrap navbar and grid, semantic HTML, table, form, Flexbox, CSS Grid, positioning, media queries (992px, 576px).

**Endterm:** arrays (`games`), loops (`for...of`, `forEach`), reusable functions with return values, cards created from the array, `addEventListener` (click, input, change, submit, DOMContentLoaded), form validation with messages next to fields, jQuery (selectors, `siblings`, `children`, `closest`, `find`, `fadeIn`, `slideToggle`).

**Final (new features):**
1. **API integration** - live deals from CheapShark with loading, success, empty and error states (`fetch` + `async/await`).
2. **OOP** - classes `Game` and `FavoritesList`; 9 `Game` objects are created and used for the cards.
3. **localStorage** - favorites (`gamehub_favorites`) and theme (`gamehub_theme`), saved as JSON, restored on load, can be cleared.
4. **Search, filter and sort** on the Games page.
5. **Theme switcher** (light/dark) with saved preference.

## API
CheapShark Deals API: `https://www.cheapshark.com/api/1.0/deals` (free, no API key needed).

## Structure
```
index.html, games.html, tournaments.html, about.html, contact.html
css/style.css
js/ storage.js, classes.js, data.js, main.js, home.js, games.js, deals.js, tournaments.js, contact.js
```
