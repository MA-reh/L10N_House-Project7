var services = null;
var sectors = null;
var languages = null;

var allServices = null;

(async function () {
    fetch("https://semicode.tech/api/v1/l10nhouse/services")
        .then((response) => response.json())
        .then((data) => {
            services = data
            services.forEach((service, index) => {
                $("#Services .row").append(`
                <div class="part col-lg-6 mb-4 wow ${((index + 1) % 2 == 0) ? "animate__backInRight" : "animate__backInLeft"}" data-wow-delay="${index * 0.2}s" data-wow-duration="2s">
                    <div class="item text-center">
                        <img src="images/${service.icon}" alt="Services icons" class="img-fluid">
                        <h5 class="my-3">
                            ${service.title}
                        </h5>
                        <p class="m-0">
                            ${prepareDes(service.description.substr(0, 150))}... <span class="servicePopupBtn" onclick="showServices(${index})">Read More</span>
                        </p>
                    </div>
                </div>
                `)
            });
        })

    fetch("https://semicode.tech/api/v1/l10nhouse/sectors")
        .then((response) => response.json())
        .then(function (data) {
            sectors = data
        })

    fetch("https://semicode.tech/api/v1/l10nhouse/languages")
        .then((response) => response.json())
        .then(function (data) {
            languages = data
        })
})()



