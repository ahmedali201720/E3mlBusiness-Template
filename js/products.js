// *******************************************************************
// filter category hover event - products page
// *******************************************************************

$(".dropdown-button-container").on({
    click: function () {
        $(".filter-dropdown-options").toggle(50);
    }
});

$(".filter-dropdown-options .dropdown-option").on({
    click: function () {
        $(".dropdown-button-container .dropdown-button").text($(this).text());
    }
});

$(".filter-category-expand").click(function () {
    var nextElement = $(this).parent().parent().next();
    if (nextElement.hasClass("sub-category-container")) {
        nextElement.toggle(300);
    }
});

// ****************************************************************************************
// ****************************************************************************************