function prepareDes(des) {

    let htmlContent = `<span class="nameWeb"> <span class="firstColor">L10N</span> <span class="secondColor">House</span></span> `;

    const regex = /\bL10N House\b/gm;
    return des.replace(regex, htmlContent);
}

function preparePointes(points) {
    let htmlContent = ``;
    points.forEach(function (point) {
        htmlContent += `<li>${point}</li>`
    })
    return htmlContent;
}

function prepareSection(sections) {
    let htmlContent = ``;

    sections.forEach(function (section) {
        htmlContent += `
        <div class="section mb-4">
            <div class="item">
                <h5 class="text-start mb-3">
                    ${section.title}
                </h5>
                <ol class="">
                    ${preparePointes(section.points)}
                </ol>
            </div>
        </div>
        `
    });
    return htmlContent;
}

function showServices(index) {
    let currentService = services[index];

    $(`.popup[data-popup-name="services"] .box`).html(`
                    <div class="header  py-2">
                <h6 class="m-0 py-1">services</h6>
                <i class="fa-solid fa-xmark" onclick="closePopup()"></i>
            </div>
            <hr class="m-0">
            <div class="body">
                <h4 class="secondColor text-center fw-bold mb-md-5 mb-4 mt-1">${currentService.title}</h4>

                <div class="row mb-5">
                    <div class="col-lg-6 mb-lg-0 mb-4">
                        <div class="item">
                            <p class="m-0">
                                ${prepareDes(currentService.description)}
                            </p>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="item rounded-3 overflow-hidden ">
                            <img src="images/${currentService.img}" alt="${currentService.img}" class="img-fluid">
                        </div>
                    </div>
                </div>

                <div class="sections">
                    ${prepareSection(currentService.sections)}
                </div>
            </div>
        `);
    openPopup("services");
}

function openPopup(popupName) {
    if (popupName == "languages") {
        $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000, function () {
            $(this).find(".box").css("transform", "translateX(0%)")
        });
    }
    $(`.popup[data-popup-name="${popupName}"]`).fadeIn(1000);
    $(`body`).css({
        overflow: "hidden",
    });
}

function closePopup() {
    $(`.popup`).fadeOut(1000);
    $(`body`).css({
        overflowY: "auto",
    });
}

function showSectors() {
    $(sectors).each(function (index, element) {
        $(`.popup[data-popup-name="sectors"] .box .row`).append(`
                    <div class="col-sm-6 col-md-4 col-lg-3 part mb-3">
                        <div class="item">
                            <img src="images/sec/${element.icon}" alt="${element.icon}" class="img-fluid">
                            <h6 class="m-0">${element.name}</h6>
                        </div>
                    </div>
                `);
    })
    openPopup("sectors");
}

function showLanguages() {
    $(`.popup[data-popup-name="languages"] .box .sections`).append(`
        ${prepareSectionLanguages(languages)}
        `);
    openPopup("languages");
}

function preparePointesLanguages(points) {
    let htmlContent = ``;
    points.forEach(function (point) {
        htmlContent += `<li><i class="fa-regular fa-circle-dot"></i> ${point}</li>`
    })
    return htmlContent;
}

function prepareSectionLanguages(sections) {
    let htmlContent = ``;
    sections.forEach(function (section) {
        htmlContent += `
                <div class="section mb-3">
                    <h3>${section.continent}</h3>
                    <ul type="none" class="p-0">
                        ${preparePointesLanguages(section.languages)}
                    </ul>
                </div>
        `
    });
    return htmlContent;
}

