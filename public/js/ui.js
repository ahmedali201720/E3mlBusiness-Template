// ***************************************************************************************
// Function to get language
// ***************************************************************************************
function getLang() {
    var lang = $('html').attr('lang');
    if (lang == 'ar') {
        return true;
    }
    else {
        return false;
    }
}

// ***************************************************************************************
// Something to do when document is ready
// ***************************************************************************************

$(document).ready(() => {

    // Truncate text of course card title
    truncateCourseCardTitle();
    truncateCourseCardText();

    // Function to handle filter state
    handleFilterState();

    // Function to truncate course card title
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

    // Function to truncate course card text
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

    // function to handle filter state on load
    function handleFilterState() {
        var categories = $(".categories-group input");
        $.each(categories, function (key, value) {
            if (value.checked) {
                $(this).next().css({
                    'color': 'black',
                    'font-weight': 600
                })
                $(this).parent().next().fadeIn();
            }
            else {
                $(this).next().css({
                    'color': '#808a85',
                    'font-weight': 400
                });
                $(this).parent().next().fadeOut();
            }
        });
    }

});

// ******************************************************************************
// Scripts for main filter (show tooltip on remove filter icon enter and leave)
// ******************************************************************************

$(".form-check-toggler").mouseenter(function () {
    var tooltip = $(".form-check-tooltip", this);
    tooltip.fadeIn(400);
});

$(".form-check-toggler").mouseleave(function () {
    var tooltip = $(".form-check-tooltip", this);
    setTimeout(() => {
        tooltip.fadeOut(100);
    }, 150);
});

$(".form-check-toggler").click(function () {
    var categoryInput = $(".category-input", $(this).parent());
    categoryInput.prop('checked', false);
    categoryInput.trigger('change');
});

$(".categories-group input").change(function () {
    handleHiddenInputLabel($(this));
});

function handleHiddenInputLabel(input) {
    var inputChecked = input.prop('checked');
    var formCheckLabel = input.next();
    var formCheckToggler = $(".form-check-toggler", input.parent().parent());
    if (inputChecked) {
        formCheckLabel.css({
            'color': 'black',
            'font-weight': 600
        });
        formCheckToggler.fadeIn(200);
    }
    else {
        formCheckLabel.css({
            'color': '#808a85',
            'font-weight': 400
        });
        formCheckToggler.fadeOut(500);
    }
}

// ******************************************************************************
// ******************************************************************************