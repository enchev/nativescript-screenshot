# NativeScript Screenshot

This is a plugin for iOS and Android that allows you to get NativeScript view as image.

## Installation
`tns plugin add nativescript-screenshot`

## Usage

### 
```XML
<Page>
   <StackLayout loaded="stackLoaded">
     <Button text="Test" tap="buttonTap" />
   </StackLayout>
</Page>
```

```JavaScript
var image = require("ui/image");
var plugin = require("nativescript-screenshot");

var stackLayout;
exports.stackLoaded = function(args){
  stackLayout = args.object
}

exports.buttonTap = function(args){
  var img = new image.Image();
  img.imageSource = plugin.getImage(args.object);
  stackLayout.addChild(img);
}
```
