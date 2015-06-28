
module.exports = function(data) {

    var frame = document.createElement("iframe");
    frame.src = data.url;
    frame.scrolling = "no";
    frame.frameborder = "0";
    frame.width = "120px";
    frame.height = "120px";

    data.$module.append(frame);
};
