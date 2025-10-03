let heightOfNavbar = $("nav.navbar").outerHeight(true);

new WOW({
    animateClass: 'animate__animated',
}).init();

$('.owl-carousel').owlCarousel({
    loop: false,
    margin: 15,
    nav: false,
    autoplay:true,
    startPosition:15,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
})

$(window).scroll(function () {
    if ($(window).scrollTop() > 1) {
        $("#Navbar").addClass("nav-Scrolled");
    } else {
        $("#Navbar").removeClass("nav-Scrolled");
    }

    if ($(window).scrollTop() > 200) {
        $("#buttonTop").addClass("scrolled");
    } else {
        $("#buttonTop").removeClass("scrolled");
    }

    $(`nav .nav-link[href]`).each(function (index, element) {
        let sectionId = $(element).attr("href");
        let topOfSection = $(`${sectionId}`).offset().top - heightOfNavbar;
        if ($(window).scrollTop() >= topOfSection) {
            $(`nav .nav-link[href="${sectionId}"]`).addClass("active").parent().siblings().children().removeClass("active");
        }
    })

});

$("#buttonTop").click(function () {
    scrollTo({
        top: 0,
    })
});

$(`.popup`).click((e) => {
    closePopup();
    $(`body`).css({
        overflowY: "auto",
    });
});

$(`.popup .box`).click((e) => {
    e.stopPropagation();
});

$(".navbar .nav-link").click(function (e) {
    e.preventDefault();

    let sectionName = $(this).attr("href"),
        currentSection = $(`${sectionName}`),
        topCurrentSection = currentSection.offset().top;

    console.log(topCurrentSection);

    $(window).scrollTop(topCurrentSection - heightOfNavbar)

})

















