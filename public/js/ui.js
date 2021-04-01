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
    } else {
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
    var articleCardText = $(".article-card .body .text a");
    truncateText(cardTitles, 50);
    truncateText(cardTexts, 115);
    truncateText(articleCardText, 186);
    if (getWindowSize() >= 1200 && getWindowSize() <= 1400)
        truncateText(diplomaTexts, 100);
    else
        truncateText(diplomaTexts, 110);

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
            } else {
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
    } else {
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
    } else {
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
    } else if (getWindowSize() >= 600 && getWindowSize() < 768) {
        sidebar.animate({
            width: '50%'
        }, 500);
        setTimeout(() => {
            $("*", sidebar).css('visibility', 'visible');
        }, 300);
    } else if (getWindowSize() <= 400) {
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

// *************************************************************************************************
// About us page 
// *************************************************************************************************
// Add minus icon for collapse element which is open by default
$(".acc-cont .collapse.show").each(function () {
    $(this).prev(".card-header").find(".fa").addClass("fa-minus").removeClass("fa-plus");
});

// Toggle plus minus icon on show hide of collapse element
$(".acc-cont .collapse").on('show.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-plus").addClass("fa-minus");
}).on('hide.bs.collapse', function () {
    $(this).prev(".card-header").find(".fa").removeClass("fa-minus").addClass("fa-plus");
});

//Canvas Dots
// particle.min.js hosted on GitHub
// Scroll down for initialisation code

!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff", 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});

// Initialisation

var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#888',
  interactive: true,
  speed: 'fast',
  density: 'high'
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);
