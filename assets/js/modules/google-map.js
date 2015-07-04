
module.exports = function(data) {

    var frame = document.createElement("iframe");
    frame.src = data.url;
    frame.scrolling = "no";
    frame.frameborder = "0";

    data.$module.append(frame);
};
