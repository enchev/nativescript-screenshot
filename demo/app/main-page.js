var image = require("ui/image");
var plugin = require("nativescript-screenshot");

var stackLayout;
exports.stackLoaded = function(args) {
    stackLayout = args.object
}

exports.buttonTap = function(args) {
    var img = new image.Image();
    img.imageSource = plugin.getImage(args.object);
    stackLayout.addChild(img);
}