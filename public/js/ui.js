function getLang() {
    var lang = $('html').attr('lang');
    if (lang == 'ar') {
        return true;
    }
    else {
        return false;
    }
}

$(document).ready(() => {

    // Truncate text of course card title
    truncateCourseCardTitle();
    truncateCourseCardText();

    function truncateCourseCardTitle() {
        var cardTitles = $(".card-title a");
        $.each(cardTitles, function (key, value) {
            var titleText = value.text;
            if (titleText.length > 90) {
                newTitle = titleText.substring(0, 90).concat("..");
                $(this).text(newTitle);
            }
        });
    }

    function truncateCourseCardText() {
        var cardTexts = $(".card-text");
        $.each(cardTexts, function (key, value) {
            var text = value.innerText;
            if (text.length > 116) {
                newText = text.substring(0, 116).concat("......");
                $(this).text(newText);
            }
        });
    }

})