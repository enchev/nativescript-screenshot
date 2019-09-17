var imageSource = require("image-source");

exports.getImage = function (view) {
    if (view.ios) {
        UIGraphicsBeginImageContextWithOptions(UIScreen.mainScreen.bounds.size, false, 0);
        let context = UIGraphicsGetCurrentContext();
        view.ios.view.layer.renderInContext(context);
        var imageFromCurrentImageContext = UIGraphicsGetImageFromCurrentImageContext();
        UIGraphicsEndImageContext();
        return imageSource.fromData(UIImagePNGRepresentation(imageFromCurrentImageContext));
    } else if (view.android) {
        view.android.setDrawingCacheEnabled(true);
        var bmp = android.graphics.Bitmap.createBitmap(view.android.getDrawingCache());
        view.android.setDrawingCacheEnabled(false);
        var source = new imageSource.ImageSource();
        source.setNativeSource(bmp);

        return source;
    }
    return undefined;
}