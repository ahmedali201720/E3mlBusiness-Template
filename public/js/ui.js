// ***************************************************************************************
// Body Click Event
// ***************************************************************************************

$('body').click(function () {
    closeAnyDropDown();
    console.log("Body Clicked");
});

// ***************************************************************************************
// Window Scroll Event
// ***************************************************************************************

$(window).scroll(function () {
    closeAnyDropDown();
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

function closeAnyDropDown(targetDropdown) {
    const dropdowns = $(".custom-dropdown").not(targetDropdown);
    $.each(dropdowns, function (key, value) {
        $(value).hide();
    });
}

// ***************************************************************************************
// Something to do when document is ready
// ***************************************************************************************

$(document).ready(() => {

    function truncateText(elements, maxLength) {
        $.each(elements, function (key, value) {
            var text = value.innerText;
            if (text.length > maxLength) {
                newText = text.substring(0, maxLength).concat("...");
                $(this).text(newText);
            }
        });
    }

    // Truncate text of course card title
    var cardTitles = $(".card-title a");
    var cardTexts = $(".card-text");
    var diplomaTexts = $(".diploma-text");
    truncateText(cardTitles, 60);
    truncateText(cardTexts, 115);
    truncateText(diplomaTexts, 120);

    // Function to handle filter state
    handleFilterState();

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
            $("*", sidebar).css('visibility', 'visible');
        }, 300);
    }
    else if (getWindowSize() >= 600 && getWindowSize() < 768) {
        sidebar.animate({
            width: '50%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).css('visibility', 'visible');
        }, 300);
    }
    else if (getWindowSize() <= 400) {
        sidebar.animate({
            width: '100%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).css('visibility', 'visible');
        }, 300);
    }
}

function closeSideBar(sidebar) {
    $("*", sidebar).css('visibility', 'hidden');
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

// ***************************************************************************************
// Layout Scripts
// ***************************************************************************************

$(".explore-container-toggler").click(function (e) {
    e.stopPropagation();
    const contentDropdown = $(".content-dropdown");
    closeAnyDropDown(contentDropdown);
    contentDropdown.toggle();
});

// *************************************************************************************
// User Profile control dropdown scripts
// *************************************************************************************

$(".user-profile-control").click(function (e) {
    e.stopPropagation();
    e.preventDefault();
    const userContentDropDown = $(".profile-control-dropdown");
    closeAnyDropDown(userContentDropDown);
    userContentDropDown.toggle();
});

// ****************************************************************************
// notfication control dropdown scripts
// *****************************************************************************

$(".notification-dropdown-controller").click(
    function (e) {
        e.stopPropagation();
        e.preventDefault();
        const notificationDropDown = $(".notfication-control-dropdown");
        closeAnyDropDown(notificationDropDown);
        if (getWindowSize() < 600)
            notificationDropDown.slideToggle();
        else
            notificationDropDown.toggle();
    }
);

//for mobile
$(".notification-sidebar-toggler").click(function (event) {
    event.stopPropagation();
    const notificationDropDown = $(".notfication-control-dropdown");
    closeAnyDropDown(notificationDropDown);
    notificationDropDown.slideUp();
});

// Bookmarks scripts 

$(".bookmark-dropdown-controller").click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    const wishlistDropdown = $(".wishlist-control-dropdown");
    closeAnyDropDown(wishlistDropdown);
    if (getWindowSize() < 600)
        wishlistDropdown.slideDown();
    else
        wishlistDropdown.toggle();
});

//for mobile
$(".wishlist-sidebar-toggler").click(function (event) {
    event.stopPropagation();
    const wishlistDropdown = $(".wishlist-control-dropdown");
    closeAnyDropDown(wishlistDropdown);
    wishlistDropdown.slideUp();
});

// user-learning scripts

$(".user-learning-controller").click(function (event) {
    event.stopPropagation();
    event.preventDefault();
    const learningDropdown = $(".learning-control-dropdown");
    closeAnyDropDown(learningDropdown);
    if (getWindowSize() < 600)
        learningDropdown.slideDown();
    else
        learningDropdown.toggle();
});

// *************************************************************************************************
// Custom Dropdown 
// *************************************************************************************************

$(".custom-dropdown").click(function (event) {
    // Stop propagation to avoid body click event triggering
    event.stopPropagation();
});