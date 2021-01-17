$(document).ready(() => {

    // Truncate text of course card title

    truncateCourseCardTitle();

    function truncateCourseCardTitle() {
        var cardTitles = $(".course-card-title a");
        $.each(cardTitles, function (key, value) {
            var titleText = value.text;
            if (titleText.length > 120) {
                newTitle = titleText.substring(0, 120).concat("..");
                $(this).text(newTitle);
            }
        });
    }

})