var zip = require("./zip");

module.exports = function (gj, options) {
    zip(gj, options).then(function (content) {
        var element = document.createElement("a");
        element.setAttribute("href", "data:application/zip;base64," + content);
        element.setAttribute("download", "spray-map.zip");
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    });
};
