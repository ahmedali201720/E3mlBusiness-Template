// ***************************************************************************************
// Body Click Event
// ***************************************************************************************

$('body').click(function () {
    // handle content dropdown container
    const exploreContainer = $(".explore-container-toggler");
    const dropdownContainer = $(".content-dropdown-container");
    if (dropdownContainer.css('display') != 'none') {
        dropdownContainer.hide();
        $(".down-icon", exploreContainer).css('visibility', 'visible');
    }
    // Handle Sidebar
    closeSideBar($("#sidebar"));
    // for debugging body propagation
    console.log("Body Clicked");
});

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
// Check element display property
// ***************************************************************************************

function elementDisplayed(element) {
    const elementDisplayValue = element.css('display');
    return (elementDisplayValue != 'none' ? true : false);
}

// ***************************************************************************************
// Function to window size
// ***************************************************************************************
function getWindowSize() {
    const window_size = $(window).width();
    return window_size;
}

// ***************************************************************************************
// Function to show and hide element
// ***************************************************************************************
function showElement(element, duration = 0) {
    element.show(duration);
}

function hideElement(element, duration = 0) {
    element.hide(duration);
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
            if (titleText.length > 60) {
                newTitle = titleText.substring(0, 60).concat("..");
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
                    'color': 'red',
                    'font-weight': 500
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
            'color': 'red',
            'font-weight': 500
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

// ******************************************************************************
// Load More and Load Less Click
// ******************************************************************************

$(".load-more-link").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $(".load-less-link").show();
});

$(".load-less-link").click(function (e) {
    e.preventDefault();
    $(this).hide();
    $(".load-more-link").show();
});

// ***************************************************************************************
// Layout Scripts
// ***************************************************************************************

$(".explore-container-toggler").click(function (e) {
    e.stopPropagation();
    $(".content-dropdown-container").toggle();
    if ($(".content-dropdown-container").css('display') == "none") {
        contentContainerHidden($(this));
    }
    else {
        contentContainerShown($(this))
    }
});

function contentContainerShown(container) {
    $(".down-icon", container).css('visibility', 'hidden');
}

function contentContainerHidden(container) {
    $(".down-icon", container).css('visibility', 'visible');
}

// ****************************************************************************************
// Sidebar Scripts
// ****************************************************************************************

function handleSidebarWidth(sidebar) {
    if (sidebar.width() > 0) {
        closeSideBar(sidebar);
    }
    else {
        openSideBar(sidebar);
    }
}

function openSideBar(sidebar) {
    if (getWindowSize() >= 768 && getWindowSize() < 992) {
        sidebar.animate({
            width: '40%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).fadeIn(150);
        }, 300);
    }
    else if (getWindowSize() >= 600 && getWindowSize() < 768) {
        sidebar.animate({
            width: '50%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).fadeIn(150);
        }, 300);
    }
    else if (getWindowSize() <= 400) {
        sidebar.animate({
            width: '100%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).fadeIn(150);
        }, 300);
    }
}

function closeSideBar(sidebar) {
    $("*", sidebar).fadeOut(50);
    setTimeout(() => {
        sidebar.animate({
            width: 0
        }, 500);
    }, 50);
}

$("#sidebar").click(function (e) {
    e.stopPropagation();
});

$(".in-sidebar-toggler").click(function (e) {
    e.stopPropagation();
    const sidebar = $('#sidebar');
    handleSidebarWidth(sidebar);
});

$("#sidebar-toggler").click(function (e) {
    e.stopPropagation();
    const sidebar = $('#sidebar');
    handleSidebarWidth(sidebar);
});

// *************************************************************************************
// User Profile control dropdown scripts
// *************************************************************************************

$(".user-profile-control").click(
    (event) => {
        event.preventDefault();
    }
);

$(".user-profile-control").hover(
    function () {
        const userContentDropDown = $(".profile-control-dropdown");
        showElement(userContentDropDown);
    },
    function () {
        const userContentDropDown = $(".profile-control-dropdown");
        hideElement(userContentDropDown);
    }
);

$(".profile-control-dropdown").hover(
    function () {
        showElement($(this));
    },
    function () {
        hideElement($(this));
    }
);

// ****************************************************************************
// notfication control dropdown scripts
// *****************************************************************************

$(".notification-dropdown-controller").click(
    function (event) {
        event.preventDefault();
    }
);

$(".notification-dropdown-controller").hover(
    function () {
        const notificationDropDown = $(".notfication-control-dropdown");
        showElement(notificationDropDown);
    },
    function () {
        const notificationDropDown = $(".notfication-control-dropdown");
        hideElement(notificationDropDown);
    }
);

$(".notfication-control-dropdown").hover(
    function () {
        showElement($(this));
    },
    function () {
        hideElement($(this));
    }
);