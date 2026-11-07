// Tournaments page (jQuery)
$(function () {
    // click on a table row: highlight it and show the choice
    $('tr[data-event]').on('click', function () {
        $(this).addClass('table-active').siblings().removeClass('table-active');
        const date = $(this).children('td').first().text();
        const game = $(this).children('td').eq(1).text();
        $('#selected-event').text(`You selected: ${game} on ${date}. Register on the Contact page!`).fadeIn();
    });

    // show / hide rules
    $('#rules-btn').on('click', function () {
        $('#rules-list').slideToggle(300);
        $(this).text($(this).text() === 'Hide rules' ? 'Show rules' : 'Hide rules');
    });
});
