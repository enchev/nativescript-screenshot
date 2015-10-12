var imageSource = require("image-source");

exports.getImage = function(view) {
    if (view.ios) {
        UIGraphicsBeginImageContextWithOptions(view.ios.frame.size, false, 0);
        view.ios.drawViewHierarchyInRectAfterScreenUpdates(CGRectMake(0, 0, view.ios.frame.size.width, view.ios.frame.size.height), true);
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