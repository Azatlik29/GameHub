// Live game deals from the free CheapShark API (no API key needed)
const DEALS_URL = 'https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15&pageSize=8';
const dealsStatus = document.getElementById('deals-status');
const dealsList = document.getElementById('deals-list');

function showStatus(message, type) {
    dealsStatus.className = 'alert alert-' + type;
    dealsStatus.textContent = message;
}

// builds one deal card with DOM methods
function createDealCard(deal) {
    const col = document.createElement('div');
    col.className = 'col-md-6 col-lg-3';

    const card = document.createElement('article');
    card.className = 'game-card';

    const badge = document.createElement('span');
    badge.className = 'badge-genre';
    badge.textContent = '-' + Math.round(deal.savings) + '%';

    const img = document.createElement('img');
    img.className = 'deal-img';
    img.src = deal.thumb;
    img.alt = deal.title;

    const body = document.createElement('div');
    body.className = 'game-card-body';

    const title = document.createElement('h3');
    title.className = 'h6';
    title.textContent = deal.title;

    const price = document.createElement('p');
    price.textContent = `$${deal.salePrice} (was $${deal.normalPrice})`;

    const link = document.createElement('a');
    link.className = 'btn btn-sm btn-accent';
    link.href = 'https://www.cheapshark.com/redirect?dealID=' + deal.dealID;
    link.target = '_blank';
    link.rel = 'noopener';
    link.textContent = 'View deal';

    body.append(title, price, link);
    card.append(badge, img, body);
    col.appendChild(card);
    return col;
}

async function loadDeals() {
    dealsList.innerHTML = '';
    showStatus('Loading deals...', 'info');
    try {
        const response = await fetch(DEALS_URL);
        if (!response.ok) {
            throw new Error('Server error ' + response.status);
        }
        const deals = await response.json();
        if (deals.length === 0) {
            showStatus('No deals found right now. Try again later.', 'warning');
            return;
        }
        deals.forEach(deal => dealsList.appendChild(createDealCard(deal)));
        showStatus(`Loaded ${deals.length} deals.`, 'success');
    } catch (error) {
        showStatus('Could not load deals. Check your internet and try again. (' + error.message + ')', 'danger');
    }
}

document.getElementById('reload-deals').addEventListener('click', loadDeals);
loadDeals();
